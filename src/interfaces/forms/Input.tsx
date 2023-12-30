import { MouseEventHandler, forwardRef } from "react";
import { Button } from "./Button";
import styles from "./Input.module.scss";

export interface IInput {
    type?: string;
    width: string;
    height: string;
    rest?: unknown;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface IInputContainer extends IInput {
    label: string;
}

export interface IInputButtonContainer extends IInputContainer {
    btnWidth: string;
    btnLabel: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Input = forwardRef<HTMLInputElement, IInput>(({ width, height, onChange, ...rest }, ref) => {
    return <input ref={ref} className={styles.input} style={{ width: width, height: height }} onChange={onChange} {...rest} />;
});

export const InputContainer = forwardRef<HTMLInputElement, IInputContainer>(({ width, height, label, ...rest }, ref) => {
    return (
        <div className={styles.input_container} style={{ width: width }}>
            <p>{label}</p>
            <Input ref={ref} width="inherit" height={height} {...rest} />
        </div>
    );
});

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
