import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../../components/forms/Button";

import { testService } from "../../api/services/test.service";

import { UserQuestionActions } from "../../store/user-question-slice";
import { Dispatch } from "@reduxjs/toolkit";

import styles from "./TestPage.module.scss";

export default function TestPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        dispatch(UserQuestionActions.initScore());
    }, [dispatch, location]);

    return (
        <div className={styles.page_wrapper}>
            <input type="text" />
            <img className={styles.page_bg} src="/img/test-background.svg" alt="" />
            <div className={styles.banner}>
                <h2>2023 당신의 올해 금융점수는 ?</h2>
                <h1>금융역량테스트</h1>

                <div className={styles.grid}>
                    <div>
                        <span>나</span>
                    </div>
                    <div>
                        <span>의</span>
                    </div>
                    <div className={styles.img_grid}>
                        <img src="/icons/dollar.png" alt="" />
                    </div>
                    <div>
                        <span>금</span>
                    </div>
                    <div className={styles.img_grid}>
                        <img src="/icons/stocodi.svg" alt="" />
                    </div>
                    <div>
                        <span>융</span>
                    </div>
                    <div>
                        <span>점</span>
                    </div>
                    <div>
                        <span>수</span>
                    </div>
                    <div>
                        <span>는</span>
                    </div>
                </div>
            </div>

            <Button
                type="primary-stroke"
                width="250px"
                height="50px"
                onClick={async () => {
                    await testService.startTest();
                    navigate("/test/question");
                }}
            >
                <span>테스트 시작하기</span>
            </Button>
        </div>
    );
}
