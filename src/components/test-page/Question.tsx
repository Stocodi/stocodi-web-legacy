import { Comment, IsCorrect } from "./Comment";
import { useQuestion } from "../../hooks/useQuestion";

import styles from "./Question.module.scss";

export interface IQuestion {
    index: number;
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
    // console.log("isCorrect", isCorrect);

    return (
        <div className={styles.question}>
            <h1>
                {index}. {question}
            </h1>

            <div className={styles.options}>{children}</div>
            <Comment isVisible={isCommentVisible}>{comment}</Comment>

            <IsCorrect value={isCorrect} />
        </div>
    );
};

export const QuestionOption: React.FC<IQuestionOption> = ({ children }) => {
    return <div className={styles.question_opt}>{children}</div>;
};
