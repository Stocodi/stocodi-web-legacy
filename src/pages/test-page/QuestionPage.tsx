import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { BreadCrumb } from "../../components/test-page/BreadCrumb";
import { Question } from "../../components/test-page/Question";

import { questions, questionsPerPage } from "../../constants/Questions";

import { useDispatch } from "react-redux";

import styles from "./QuestionPage.module.scss";
import { Dispatch } from "@reduxjs/toolkit";
import { UserQuestionActions } from "../../store/user-question-slice";

export default function QuestionPage() {
    const dispatch: Dispatch = useDispatch();
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(1);

    const location = useLocation();

    const onNextBtnClick = () => {
        if (document.querySelectorAll(`input[type=radio]:checked`).length !== 5) {
            alert("아직 풀지 않은 문항이 있습니다!");
            return;
        }

        const startIdx = (page - 1) * questionsPerPage;
        const endIdx = startIdx + questionsPerPage;

        let pageScore = 0;

        for (let i = startIdx + 1; i < endIdx + 1; i++) {
            const selectedOption = document.querySelector<HTMLInputElement>(`input[name=question-option-${i}]:checked`);

            if (selectedOption) {
                if (selectedOption.value === questions[i - 1].answer) {
                    pageScore += 1;
                } else {
                    dispatch(UserQuestionActions.addWrongAnswerIndex(i));
                }
            }
        }

        dispatch(UserQuestionActions.setScore({ index: page, score: pageScore }));

        // Clear selected options on the current page
        for (let i = startIdx + 1; i < endIdx + 1; i++) {
            const options = document.querySelectorAll<HTMLInputElement>(`input[name=question-option-${i}]:checked`);
            options.forEach((option) => (option.checked = false));
        }

        window.scrollTo(0, 0);
        if (page === questions.length / questionsPerPage) navigate("/test/result");
        else setPage((page) => page + 1);
    };

    useEffect(() => {
        // console.log("use effect called");
        dispatch(UserQuestionActions.initScore());
    }, [dispatch, location]);

    return (
        <div className={styles.question_page}>
            <div className={styles.title}>
                <h1>금융역량테스트</h1>
                <p>총 {questions.length}문항으로, 전 문항 객관식으로 구성되어 있습니다</p>
            </div>

            <div className={styles.breadcrumb_wrapper}>
                <BreadCrumb cursor={page} items={["경제기초", "은행상품", "카드와 신용", "세금", "보험", "투자"]} />
            </div>

            {questions.slice((page - 1) * questionsPerPage, (page - 1) * questionsPerPage + 5).map((element, key) => {
                return <Question key={key} index={page * questionsPerPage - questionsPerPage + 1 + key} question={element.question} />;
            })}

            <button className={styles.btn} onClick={onNextBtnClick}>
                다음문항
            </button>
        </div>
    );
}
