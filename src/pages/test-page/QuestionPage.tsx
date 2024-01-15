import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Question, QuestionOption } from "../../components/test-page/Question";
import { BreadCrumb } from "../../components/test-page/BreadCrumb";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { questions } from "../../constants/Questions";
import styles from "./QuestionPage.module.scss";

export default function QuestionPage() {
    const navigate = useNavigate();
    const [index, setIndex] = useState<number>(1);

    const onPrevClick = () => {
        if (index === 1) navigate("/test");
        else setIndex(index - 1);
    };
    const onNextClick = () => {
        if (index === questions.length) navigate("/test/result");
        else setIndex(index + 1);
    };

    return (
        <div className={styles.question_page}>
            <div className={styles.title}>
                <h1>금융역량테스트</h1>
                <h3>
                    <span>총 {questions.length}문항으로, </span>
                    <span>전 문항 객관식으로 구성되어 있습니다</span>
                </h3>
            </div>

            <BreadCrumb cursor={Math.trunc((index - 1) / 5)} items={["경제기초", "은행상품", "카드와 신용", "세금", "보험", "투자"]} />

            {
                <Question
                    index={index}
                    question={questions[index - 1].question}
                    answer={questions[index - 1].answer}
                    comment={questions[index - 1].comment}
                >
                    {questions[index - 1].options.map((element, index) => {
                        return <QuestionOption key={index}>{element}</QuestionOption>;
                    })}

                    <div className={styles.controller}>
                        <button onClick={onPrevClick}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <span>
                            ( {index} / {questions.length} )
                        </span>

                        <button onClick={onNextClick}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </Question>
            }
        </div>
    );
}
