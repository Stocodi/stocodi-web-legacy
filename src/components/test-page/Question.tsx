import { useState, useEffect } from "react";
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
    const [viewComment, setViewComment] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    useEffect(() => {
        let answerTimer: ReturnType<typeof setTimeout>;

        const options = document.querySelectorAll(`.${styles.question_opt}`);
        for (let idx = 0; idx < options.length; idx++) {
            options[idx].addEventListener("click", () => {
                if (idx === answer) {
                    // 정답
                    setIsCorrect(true);
                    setViewComment(true);
                } else {
                    // 오답
                    setIsCorrect(false);
                    setViewComment(true);
                }
            });
        }

        return () => {
            setViewComment(false);
            setIsCorrect(null);
        };
    }, [answer]);

    return (
        <div className={styles.question}>
            <h1>
                {index}. {question}
            </h1>

            <div className={styles.options}>{children}</div>

            {isCorrect !== null && <img className={styles.ans} src="/icons/ans_correct.svg" alt="" />}
            {viewComment && <div>{comment}</div>}
        </div>
    );
};

export const QuestionOption: React.FC<IQuestionOption> = ({ children }) => {
    return <div className={styles.question_opt}>{children}</div>;
};
