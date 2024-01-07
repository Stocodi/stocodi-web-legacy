import { useLocation, useNavigate } from "react-router-dom";
import { Question, QuestionOption } from "../../components/test-page/Question";
import { Problems } from "../../constants/Problems";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./QuestionPage.module.scss";

export default function QuestionPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const index = location.pathname.split("/").at(-1) as string;
    const problem = Problems[+index - 1];

    const onPrevClick = () => {
        navigate(index === "1" ? `/test` : `/test/${+index - 1}`);
    };
    const onNextClick = () => {
        navigate(index === Problems.length.toString() ? `/test/result` : `/test/${+index + 1}`);
    };

    return (
        <div className={styles.question_page}>
            {typeof index === "string" && (
                <Question index={index} question={problem.question} answer={problem.answer} comment={problem.comment}>
                    {problem.options.map((element, index) => {
                        return <QuestionOption key={index}>{element}</QuestionOption>;
                    })}
                </Question>
            )}

            <div className={styles.controller}>
                <button onClick={onPrevClick}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <span>
                    ( {index} / {Problems.length} )
                </span>

                <button onClick={onNextClick}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}
