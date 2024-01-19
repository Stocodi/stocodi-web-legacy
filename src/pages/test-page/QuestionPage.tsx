import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BreadCrumb } from "../../components/test-page/BreadCrumb";
import { Question } from "../../components/test-page/Question";

import { questions, questionsPerPage } from "../../constants/Questions";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import styles from "./QuestionPage.module.scss";

export default function QuestionPage() {
    const { submittedAnswer } = useSelector((state: RootState) => state.UserQuestion);

    const navigate = useNavigate();
    const [page, setPage] = useState<number>(1);

    const onNextBtnClick = () => {
        console.log(page * questionsPerPage, submittedAnswer.length);
        if (page * questionsPerPage !== submittedAnswer.length) {
            alert("아직 풀지 않은 문항이 있습니다!");
            return;
        }

        window.scrollTo(0, 0);
        if (page === questions.length / questionsPerPage) navigate("/test/result");
        else setPage((page) => page + 1);
    };

    return (
        <div className={styles.question_page}>
            <div className={styles.title}>
                <h1>금융역량테스트</h1>
                <p>총 {questions.length}문항으로, 전 문항 객관식으로 구성되어 있습니다</p>
            </div>

            <div className={styles.breadcrumb_wrapper}>
                <BreadCrumb cursor={page} items={["경제기초", "은행상품", "카드와 신용", "세금", "보험", "투자"]} />
            </div>

            {questions.slice(page, page + questionsPerPage).map((element, key) => {
                return <Question key={key} index={page * questionsPerPage - questionsPerPage + 1 + key} question={element.question} />;
            })}

            <button className={styles.btn} onClick={onNextBtnClick}>
                다음문항
            </button>
        </div>
    );
}
