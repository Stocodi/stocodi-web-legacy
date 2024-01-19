import { forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import styles from "./RadioButton.module.scss";

export interface IRadioButton {
    name: string;
}
export interface IRadioOption {
    name: string;
    label: string;
}

export const RadioButton = forwardRef<HTMLInputElement, IRadioButton>(({ name }, ref) => {
    return (
        <>
            <input ref={ref} className={styles.radio_btn} type="radio" name={name} />
            <FontAwesomeIcon icon={faCheck} />
        </>
    );
});

export const RadioOption = forwardRef<HTMLInputElement, IRadioOption>(({ name, label }, ref) => {
    return (
        <div className={styles.radio_opt}>
            <RadioButton ref={ref} name={name}></RadioButton>
            <p>{label}</p>
        </div>
    );
});
