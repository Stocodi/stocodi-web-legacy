import { Comment, IsCorrect } from "./Comment";

import styles from "./Question.module.scss";
import { useQuestion } from "../../hooks/useQuestion";

export interface IQuestion {
    index: string;
    question: string;
    children: React.ReactNode;
    answer: string;
    comment: string;
}

export interface IQuestionOption {
    children: React.ReactNode;
}

export const Question: React.FC<IQuestion> = ({ index, question, answer, comment, children }) => {
    const { isCorrect, isCommentVisible } = useQuestion(question, answer, styles.question_opt);
    console.log("isCorrect", isCorrect);

    return (
        <div className={styles.question}>
            <h1>
                {index}. {question}
            </h1>

            <div className={styles.options}>{children}</div>

            <IsCorrect value={isCorrect} />
            <Comment isVisible={isCommentVisible}>{comment}</Comment>
        </div>
    );
};

export const QuestionOption: React.FC<IQuestionOption> = ({ children }) => {
    return <div className={styles.question_opt}>{children}</div>;
};
