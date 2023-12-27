/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./SigninPage.module.scss";

import { Button } from "../../interfaces/forms/Button";
import { InputContainer } from "../../interfaces/forms/Input";
import { Title } from "../../components/auth-page/Title";

import { handleLogin } from "../../utils/Authentication";

// import { SocialLoginProviders } from "../../constants/SocialLogin";

export default function SigninPage() {
    const naviagte = useNavigate();
    const idRef = useRef<HTMLInputElement>(null);
    const pwRef = useRef<HTMLInputElement>(null);

    const onLoginBtnClick = async () => {
        // 로그인 요청 & 쿠키 저장
        try {
            await handleLogin(idRef.current?.value as string, pwRef.current?.value as string);
            naviagte("/");
        } catch (err) {
            alert("아이디 혹은 비밀번호가 일치하지 않습니다");
        }
    };

    const onKakaoLoginBtnClick = () => {
        console.log("kakao login");
    };

    return (
        <>
            <Title title="로그인" subtitle="로그인 후 서비스를 이용해보세요"></Title>

            <div className={styles.signin_container}>
                <InputContainer ref={idRef} type="text" width="100%" height="50px" label="아이디"></InputContainer>
                <InputContainer ref={pwRef} type="password" width="100%" height="50px" label="비밀번호"></InputContainer>
            </div>

            <div className={styles.signin_container}>
                <Button type="primary-filled" width="min(100%, 700px)" height="50px" onClick={onLoginBtnClick}>
                    로그인
                </Button>
            </div>

            <div className={styles.signin_container}>
                <div className={styles.signin_seperator}>
                    <div></div>
                    <span>또는</span>
                    <div></div>
                </div>

                <div className={styles.signup_link}>
                    아직 계정이 없으신가요?
                    <Link to="/auth/signup/step1">회원가입</Link>
                </div>
            </div>

            <button onClick={onKakaoLoginBtnClick}>카카오 로그인</button>
        </>
    );
}
