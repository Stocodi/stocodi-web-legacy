import { useLocation } from "react-router-dom";
import { Question, QuestionOption } from "../../components/test-page/Question";
import { Problems } from "../../constants/Problems";

import styles from "./QuestionPage.module.scss";
import { Button } from "../../interfaces/forms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function QuestionPage() {
    const location = useLocation();
    const index = location.pathname.split("/").at(-1) as string;
    const problem = Problems[+index - 1];

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
                <button>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <span>
                    ( {index} / {Problems.length} )
                </span>

                <button>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}
