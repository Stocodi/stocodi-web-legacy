import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../interfaces/forms/Button";
import { InputContainer, InputButtonContainer, InputVerificationContainer } from "../../interfaces/forms/Input";
import { Title } from "../../components/auth-page/Title";
import { CategoryGrid } from "../../components/auth-page/CategoryGrid";
import { Categories } from "../../constants/Categories";

import { ChangeEventHandler, useRef } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { UserSignupActions } from "../../store/user-signup-slice";
import { handleSignup, verifyEmail, verifyNickName } from "../../api/Authentication";
import { RootState } from "../../store/store";

import styles from "./SignupPage.module.scss";
import { verifyPassword } from "../../utils/verify";

export default function SignupPage() {
    const [step, setStep] = useState<number>(1);

    if (step === 1) return <SignupStep.One setStep={setStep} />;
    else if (step === 2) return <SignupStep.Two setStep={setStep} />;
    else if (step === 3) return <SignupStep.Three setStep={setStep} />;
}

interface ISignupStep {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SignupStep = {
    One: ({ setStep }: ISignupStep) => {
        const navigate = useNavigate();
        const dispatch: Dispatch = useDispatch();

        // ❓ 변경시 리렌더링 필요없다면 useRef 훅 사용해도 되지 않을까 ??
        const { isEmailVerified, isPasswordVerified } = useSelector((state: RootState) => state.UserSignup);

        const nameRef = useRef<HTMLInputElement>(null);
        const emailRef = useRef<HTMLInputElement>(null);
        const passwordRef = useRef<HTMLInputElement>(null);

        const onEmailVerificationClick = async () => {
            try {
                await verifyEmail(emailRef.current?.value as string);
                dispatch(UserSignupActions.verifyEmail());
                alert("사용가능한 이메일 입니다");
            } catch (err) {
                alert("해당 이메일은 사용할 수 없습니다");
            }
        };

        const onEmailChange: ChangeEventHandler<HTMLInputElement> = () => {
            // 이메일 변경시 재검사 필요
            dispatch(UserSignupActions.unVerifyEmail());
        };

        const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
            const pwVerification = verifyPassword(e.target.value);
            if (pwVerification) {
                dispatch(UserSignupActions.verifyPassword());
            } else {
                dispatch(UserSignupActions.unVerifyPassword());
            }
        };

        const onPrevBtnClick = () => {
            navigate("/");
        };
        const onNextBtnClick = () => {
            if (!isEmailVerified) {
                alert("이메일 중복검사를 해주세요");
                return;
            }
            if (!isPasswordVerified) {
                alert("비밀번호는 영문 숫자 특수기호 조합 8 ~ 15자리 이어야 합니다");
                return;
            }

            dispatch(UserSignupActions.setName(nameRef.current?.value as string));
            dispatch(UserSignupActions.setEmail(emailRef.current?.value as string));
            dispatch(UserSignupActions.setPassword(passwordRef.current?.value as string));
            setStep((step) => step + 1);
        };

        return (
            <>
                <Title title="Stocodi 에 오신걸 환영해요!" />

                <div className={styles.input_wrapper}>
                    <InputContainer ref={nameRef} label="이름" type="text" width="100%" height="50px"></InputContainer>
                    <InputButtonContainer
                        ref={emailRef}
                        label="이메일 주소(아이디)"
                        type="text"
                        width="100%"
                        height="50px"
                        btnWidth="100px"
                        btnLabel="중복확인"
                        onChange={onEmailChange}
                        onClick={onEmailVerificationClick}
                    />
                    <InputVerificationContainer
                        ref={passwordRef}
                        label="비밀번호"
                        verifyLabel={!isPasswordVerified ? "비밀번호는 영문 숫자 특수기호 조합 8 ~ 15자리 이어야 합니다" : ""}
                        type="password"
                        width="100%"
                        height="50px"
                        onChange={onPasswordChange}
                    />
                </div>

                <div className={styles.btn_group}>
                    <Button type="primary-stroke" width="80px" height="80px" onClick={onPrevBtnClick}>
                        <FontAwesomeIcon icon={faChevronLeft} size="xl" />
                    </Button>

                    <Button type="primary-filled" width="80px" height="80px" onClick={onNextBtnClick}>
                        <FontAwesomeIcon icon={faChevronRight} size="xl" />
                    </Button>
                </div>
            </>
        );
    },

    Two: ({ setStep }: ISignupStep) => {
        const navigate = useNavigate();
        const dispatch: Dispatch = useDispatch();
        const { isNickNameVerified } = useSelector((state: RootState) => state.UserSignup);

        const nicknameRef = useRef<HTMLInputElement>(null);
        const phoneRef = useRef<HTMLInputElement>(null);
        const birthRef = useRef<HTMLInputElement>(null);

        const onNicknameVerificationClick = async () => {
            try {
                await verifyNickName(nicknameRef.current?.value as string);
                dispatch(UserSignupActions.verifyNickName());
                alert("사용가능한 닉네임 입니다");
            } catch (err) {
                alert("해당 닉네임은 사용할 수 없습니다");
            }
        };

        const onNickNameChange = () => {
            // 닉네임 변경시 재검사 필요
            dispatch(UserSignupActions.unVerifyNickName());
        };

        const onPrevBtnClick = () => {
            setStep((step) => step - 1);
        };

        const onNextBtnClick = () => {
            if (isNickNameVerified) {
                dispatch(UserSignupActions.setNickName(nicknameRef.current?.value as string));
                dispatch(UserSignupActions.setBirthDate(birthRef.current?.value as string));
                navigate("/auth/signup/step3");
            } else {
                alert("닉네임 중복확인을 해주세요");
            }
        };

        return (
            <>
                <Title title="Stocodi 에 오신걸 환영해요!" />

                <div className={styles.input_wrapper}>
                    <InputButtonContainer
                        ref={nicknameRef}
                        label="닉네임"
                        type="text"
                        width="100%"
                        height="50px"
                        btnWidth="100px"
                        btnLabel="중복확인"
                        onChange={onNickNameChange}
                        onClick={onNicknameVerificationClick}
                    ></InputButtonContainer>
                    <InputContainer
                        ref={phoneRef}
                        label="휴대폰 번호"
                        type="text"
                        width="100%"
                        height="50px"
                        placeholder="하이픈(-)을 제외한 숫자만 입력해주세요"
                    ></InputContainer>
                    <InputContainer
                        ref={birthRef}
                        label="생년월일"
                        type="text"
                        width="100%"
                        height="50px"
                        placeholder="ex) 20001212"
                    ></InputContainer>
                </div>

                <div className={styles.btn_group}>
                    <Button type="primary-stroke" width="80px" height="80px" onClick={onPrevBtnClick}>
                        <FontAwesomeIcon icon={faChevronLeft} size="xl" />
                    </Button>

                    <Button type="primary-filled" width="80px" height="80px" onClick={onNextBtnClick}>
                        <FontAwesomeIcon icon={faChevronRight} size="xl" />
                    </Button>
                </div>
            </>
        );
    },

    Three: ({ setStep }: ISignupStep) => {
        const navigate = useNavigate();
        const signupData = useSelector((state: RootState) => state.UserSignup);

        const onPrevBtnClick = () => {
            setStep((step) => step - 1);
        };

        const onSignupBtnClicked = async () => {
            try {
                await handleSignup({
                    email: signupData.email,
                    password: signupData.password,
                    name: signupData.name,
                    nickname: signupData.nickname,
                    birth_date: signupData.birth_date,
                    interest_categories: signupData.interest_categories,
                    gender: "MALE",
                });
                alert("회원가입에 성공하였습니다");
                navigate("/");
            } catch (err) {
                alert("회원가입에 실패하였습니다");
            }
        };

        return (
            <>
                <Title title="관심 종목이 있나요?" subtitle="관심 종목을 선택한 후 맞춤화된 서비스를 만나보세요." />
                <CategoryGrid.Container>
                    {Categories.map((element) => {
                        return <CategoryGrid.Item key={element.key} icon={element.icon} text={element.text} />;
                    })}
                </CategoryGrid.Container>

                <div className={styles.btn_group}>
                    <Button type="primary-stroke" width="80px" height="80px" onClick={onPrevBtnClick}>
                        <FontAwesomeIcon icon={faChevronLeft} size="xl" />
                    </Button>

                    <Button type="primary-filled" width="80px" height="80px" onClick={onSignupBtnClicked}>
                        <FontAwesomeIcon icon={faChevronRight} size="xl" />
                    </Button>
                </div>
            </>
        );
    },
};
