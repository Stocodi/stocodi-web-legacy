/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import background from "@/assets/auth-page/background.png";
import styles from "./SigninPage.module.scss";

import { Button } from "../../interfaces/forms/Button";
import { InputContainer } from "../../interfaces/forms/Input";

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

    return (
        <div className={styles.signin_page}>
            <div className={styles.signin_background}>
                <img src={background} alt="SignIn Background" />
            </div>

            <div className={styles.signin_wrapper}>
                <div className={styles.signin_container}>
                    <InputContainer ref={idRef} type="text" width="100%" height="50px" label="아이디"></InputContainer>
                    <InputContainer ref={pwRef} type="password" width="100%" height="50px" label="비밀번호"></InputContainer>
                </div>

                <div className={styles.signin_container}>
                    <Button type="primary-filled" width="min(100%, 600px)" height="50px" onClick={onLoginBtnClick}>
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
                        <Link to="/auth/signup">회원가입</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
