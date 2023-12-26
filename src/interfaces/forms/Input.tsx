import { forwardRef } from "react";
import styles from "./Input.module.scss";

export interface IInput {
    type?: string;
    width?: string;
    height?: string;
    rest?: any;
}

export interface IInputContainer extends IInput {
    label: string;
}

export const Input = forwardRef<HTMLInputElement, IInput>(({ width, height, ...rest }, ref) => {
    return <input ref={ref} className={styles.input} style={{ width: width, height: height }} {...rest} />;
});

export const InputContainer = forwardRef<HTMLInputElement, IInputContainer>(({ width, height, label, ...rest }, ref) => {
    return (
        <div className={styles.input_container} style={{ width: width }}>
            <p>{label}</p>
            <Input ref={ref} width="inherit" height={height} {...rest} />
        </div>
    );
});
