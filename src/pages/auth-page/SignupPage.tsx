import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../interfaces/forms/Button";
import { InputContainer } from "../../interfaces/forms/Input";
import { Title } from "../../components/auth-page/Title";
import { CategoryGrid } from "../../components/auth-page/CategoryGrid";
import { Categories } from "../../constants/Categories";

import styles from "./SignupPage.module.scss";
import { useRef } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { UserSignupActions } from "../../store/user-signup-slice";
import { handleSignup } from "../../utils/Authentication";
import { RootState } from "../../store/store";

const SignupPage = {
    One: () => {
        const navigate = useNavigate();
        const dispatch: Dispatch = useDispatch();

        const nameRef = useRef<HTMLInputElement>(null);
        const emailRef = useRef<HTMLInputElement>(null);
        const passwordRef = useRef<HTMLInputElement>(null);

        const onPrevBtnClick = () => {
            navigate("/auth/signin");
        };
        const onNextBtnClick = () => {
            dispatch(UserSignupActions.setName(nameRef.current?.value as string));
            dispatch(UserSignupActions.setEmail(emailRef.current?.value as string));
            dispatch(UserSignupActions.setPassword(passwordRef.current?.value as string));
            navigate("/auth/signup/step2");
        };

        return (
            <>
                <Title title="Stocodi 에 오신걸 환영해요!" />

                <InputContainer ref={nameRef} label="이름" type="text" width="100%" height="50px"></InputContainer>
                <InputContainer ref={emailRef} label="이메일 주소(아이디)" type="text" width="100%" height="50px"></InputContainer>
                <InputContainer ref={passwordRef} label="비밀번호" type="password" width="100%" height="50px"></InputContainer>

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

    Two: () => {
        const navigate = useNavigate();
        const dispatch: Dispatch = useDispatch();

        const nicknameRef = useRef<HTMLInputElement>(null);
        const phoneRef = useRef<HTMLInputElement>(null);
        const birthRef = useRef<HTMLInputElement>(null);

        const onNextBtnClick = () => {
            dispatch(UserSignupActions.setNickName(nicknameRef.current?.value as string));
            dispatch(UserSignupActions.setBirthDate(birthRef.current?.value as string));
            navigate("/auth/signup/step3");
        };

        return (
            <>
                <Title title="Stocodi 에 오신걸 환영해요!" />

                <InputContainer ref={nicknameRef} label="닉네임" type="text" width="100%" height="50px"></InputContainer>
                <InputContainer
                    ref={phoneRef}
                    label="휴대폰 번호"
                    type="text"
                    width="100%"
                    height="50px"
                    placeholder="하이픈(-)을 제외한 숫자만 입력해주세요"
                ></InputContainer>
                <InputContainer ref={birthRef} label="생년월일" type="text" width="100%" height="50px" placeholder="ex) 20001212"></InputContainer>

                <div className={styles.btn_group}>
                    <Button type="primary-stroke" width="80px" height="80px" onClick={() => navigate("/auth/signup/step1")}>
                        <FontAwesomeIcon icon={faChevronLeft} size="xl" />
                    </Button>

                    <Button type="primary-filled" width="80px" height="80px" onClick={onNextBtnClick}>
                        <FontAwesomeIcon icon={faChevronRight} size="xl" />
                    </Button>
                </div>
            </>
        );
    },

    Three: () => {
        const navigate = useNavigate();
        const signupData = useSelector((state: RootState) => state.UserSignup);

        const onPrevBtnClick = () => {
            navigate("/auth/signup/step2");
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

export default SignupPage;
