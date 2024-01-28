import { RadioOption } from "../../interfaces/forms/RadioButton";
import styles from "./Question.module.scss";

export interface IQuestion {
    index: number;
    question: string;
}

export interface ICommentaryQuestion {
    type: "correct" | "incorrect";
    index: number;
    question: string;
    answer: string;
    commentary: string;
}

export const Question: React.FC<IQuestion> = ({ index, question }) => {
    return (
        <div className={styles.question}>
            <p>
                {index}. {question}
            </p>

            <div className={styles.options_container}>
                <RadioOption name={`question-option-${index}`} label="O" value="O" />
                <RadioOption name={`question-option-${index}`} label="X" value="X" />
                <RadioOption name={`question-option-${index}`} label="모르겠음" value="모르겠음" />
            </div>
        </div>
    );
};

export const CommentaryQuestion: React.FC<ICommentaryQuestion> = ({ type, index, question, commentary, answer }) => {
    return (
        <div className={styles.commentary_question}>
            <p>
                <img src={`/icons/icon-${type}.png`} alt="" />
                {index}. {question} (정답 : {answer})
            </p>

            <div className={styles.commentary}>
                <p>해설</p>
                <p>{commentary}</p>
            </div>
        </div>
    );
};
