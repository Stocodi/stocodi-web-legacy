import { forwardRef } from "react";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./RadioButton.module.scss";

export interface IRadioButton {
    name: string;
    value: string;
}
export interface IRadioOption {
    name: string;
    value: string;
    label: string;
}

export const RadioButton = forwardRef<HTMLInputElement, IRadioButton>(({ name, value }, ref) => {
    return (
        <>
            <input ref={ref} className={styles.radio_btn} type="radio" name={name} value={value} />
            <FontAwesomeIcon icon={faCheck} />
        </>
    );
});

export const RadioOption = forwardRef<HTMLInputElement, IRadioOption>(({ name, label, value }, ref) => {
    return (
        <div className={styles.radio_opt}>
            <RadioButton ref={ref} name={name} value={value}></RadioButton>
            <p>{label}</p>
        </div>
    );
});
