import { MouseEventHandler, forwardRef, useId } from "react";

import styles from "./CheckBox.module.scss";

export interface ICheckBox {
    label?: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLInputElement>;
    rest?: unknown;
}

export const CheckBox = forwardRef<HTMLInputElement, ICheckBox>(({ label, className, onClick, ...rest }, ref) => {
    const uuid = useId();
    return (
        <div className={styles.checkbox_container}>
            {label && <label htmlFor={`checkbox-${uuid}`}>{label}</label>}
            <input
                id={`checkbox-${uuid}`}
                ref={ref}
                onClick={onClick}
                type="checkbox"
                className={`${styles.checkbox} ${className ?? ""}`}
                {...rest}
            />
        </div>
    );
});
