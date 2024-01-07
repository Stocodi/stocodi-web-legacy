import { useEffect } from "react";
import styles from "./Question.module.scss";

export interface IQuestion {
    index: string;
    question: string;
    children: React.ReactNode;
    answer: number;
    comment: string;
}

export interface IQuestionOption {
    children: React.ReactNode;
}

export const Question: React.FC<IQuestion> = ({ index, question, answer, comment, children }) => {
    useEffect(() => {
        const options = document.querySelectorAll(`.${styles.question_opt}`);
        for (let idx = 0; idx < options.length; idx++) {
            options[idx].addEventListener("click", () => {
                if (idx === answer) {
                    // 정답
                } else {
                    // 오답
                }
            });
        }
    }, [answer]);

    return (
        <div className={styles.question}>
            <h1>
                {index}. {question}
            </h1>

            <div className={styles.options}>{children}</div>
        </div>
    );
};

export const QuestionOption: React.FC<IQuestionOption> = ({ children }) => {
    return <div className={styles.question_opt}>{children}</div>;
};
