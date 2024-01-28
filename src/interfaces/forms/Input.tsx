import { MouseEventHandler, forwardRef } from "react";
import { Button } from "./Button";
import styles from "./Input.module.scss";

export interface IInput {
    type?: string;
    width: string;
    height: string;
    rest?: unknown;
    placeholder?: string;
    disabled?: boolean;
    inlineStyle?: React.CSSProperties;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface IInputContainer extends IInput {
    label: string;
}

export interface IInputVerifyContainer extends IInputContainer {
    verifyLabel: string;
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

export interface IInputButtonContainer extends IInputContainer {
    btnWidth: string;
    btnLabel: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Input = forwardRef<HTMLInputElement, IInput>(({ width, height, onChange, disabled, inlineStyle, ...rest }, ref) => {
    return (
        <input
            ref={ref}
            disabled={disabled}
            className={styles.input}
            style={{ ...inlineStyle, width: width, height: height }}
            onChange={onChange}
            {...rest}
        />
    );
});

export const InputContainer = forwardRef<HTMLInputElement, IInputContainer>(({ width, height, label, ...rest }, ref) => {
    return (
        <div className={styles.input_container} style={{ width: width }}>
            <p>{label}</p>
            <Input ref={ref} width="inherit" height={height} {...rest} />
        </div>
    );
});

export const InputVerificationContainer = forwardRef<HTMLInputElement, IInputVerifyContainer>(
    ({ width, height, label, verifyLabel, ...rest }, ref) => {
        return (
            <div className={styles.input_container} style={{ width: width }}>
                <p>
                    <span>{label}</span>
                    <span>{verifyLabel}</span>
                </p>
                <Input ref={ref} width="inherit" height={height} {...rest} />
            </div>
        );
    },
);

export const InputButtonContainer = forwardRef<HTMLInputElement, IInputButtonContainer>(
    ({ width, height, label, btnWidth, btnLabel, onClick, ...rest }, ref) => {
        return (
            <div className={styles.input_btn_wrapper} style={{ width: width }}>
                <p>{label}</p>
                <div className={styles.input_btn_container}>
                    <Input ref={ref} width={`calc(${width} - ${btnWidth})`} height={height} {...rest} />
                    <Button type="primary-stroke" width={btnWidth} onClick={onClick}>
                        {btnLabel}
                    </Button>
                </div>
            </div>
        );
    },
);

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
