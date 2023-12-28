import { forwardRef } from "react";
import styles from "./Input.module.scss";

export interface IInput {
    type?: string;
    width?: string;
    height?: string;
    disabled?: boolean;
    rest?: unknown;
    placeholder?: string;
}

export interface IInputContainer extends IInput {
    label: string;
}

export interface ITextArea {
    width?: string;
    height?: string;
    cols?: number;
    rows?: number;
}

export interface ITextAreaContainer extends ITextArea {
    label: string;
}

export const Input = forwardRef<HTMLInputElement, IInput>(({ width, height, disabled, ...rest }, ref) => {
    return <input ref={ref} className={styles.input} disabled={disabled} style={{ width: width, height: height }} {...rest} />;
});

export const InputContainer = forwardRef<HTMLInputElement, IInputContainer>(({ width, height, label, ...rest }, ref) => {
    return (
        <div className={styles.input_container} style={{ width: width }}>
            <p>{label}</p>
            <Input ref={ref} width="inherit" height={height} {...rest} />
        </div>
    );
});

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(({ width, height, cols, rows }, ref) => {
    return <textarea ref={ref} className={styles.textarea} cols={cols} rows={rows} style={{ width: width, height: height }}></textarea>;
});

export const TextAreaContainer = forwardRef<HTMLTextAreaElement, ITextAreaContainer>(({ width, height, cols, rows, label }, ref) => {
    return (
        <div className={styles.input_container} style={{ width: width }}>
            <p>{label}</p>
            <TextArea ref={ref} width="inherit" height={height} rows={rows} cols={cols} />
        </div>
    );
});
