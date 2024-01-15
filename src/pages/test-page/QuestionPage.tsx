import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Question, QuestionOption } from "../../components/test-page/Question";
import { questions } from "../../constants/Questions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
