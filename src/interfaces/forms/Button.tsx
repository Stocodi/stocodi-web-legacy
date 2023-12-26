import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

export interface IButton {
    type: "primary-filled" | "primary-stoke";
    width?: string;
    height?: string;
    children?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<IButton> = ({ type, width, height, children, onClick, ...rest }) => {
    if (type === "primary-filled") {
        return (
            <button
                className={`${styles.btn_default} ${styles.btn_primary_filled}`}
                style={{ width: width, height: height }}
                onClick={onClick}
                {...rest}
            >
                {children}
            </button>
        );
    }
};
