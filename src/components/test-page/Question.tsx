import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RadioOption } from "../../interfaces/forms/RadioButton";
import styles from "./Question.module.scss";
import { Dispatch } from "@reduxjs/toolkit";
import { UserQuestionActions } from "../../store/user-question-slice";

export interface IQuestion {
    index: number;
    question: string;
}

export const Question: React.FC<IQuestion> = ({ index, question }) => {
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        const options = document.querySelectorAll<HTMLInputElement>(`input[name=question-option-${index}]`);

        for (let optionIndex = 0; optionIndex < options.length; optionIndex++) {
            options[optionIndex].addEventListener("change", () => {
                if (optionIndex === 0) dispatch(UserQuestionActions.selectAnswer({ index: index, selectedAnswer: "O" }));
                else if (optionIndex === 1) dispatch(UserQuestionActions.selectAnswer({ index: index, selectedAnswer: "X" }));
                else if (optionIndex === 2) dispatch(UserQuestionActions.selectAnswer({ index: index, selectedAnswer: "모르겠음" }));
            });
        }

        return () => {
            // 이전에 체크한 RadioButton 체크해제
            for (let optionIndex = 0; optionIndex < options.length; optionIndex++) {
                options[optionIndex].checked = false;
            }
        };
    }, [index, dispatch]);

    return (
        <div className={styles.question}>
            <p>
                {index}. {question}
            </p>

            <div className={styles.options_container}>
                <RadioOption name={`question-option-${index}`} label="O" />
                <RadioOption name={`question-option-${index}`} label="X" />
                <RadioOption name={`question-option-${index}`} label="모르겠음" />
            </div>
        </div>
    );
};
