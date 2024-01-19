import { RadioOption } from "../../interfaces/forms/RadioButton";
import styles from "./Question.module.scss";

export interface IQuestion {
    index: number;
    question: string;
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
