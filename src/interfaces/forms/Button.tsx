import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

export interface IButton {
    type: "primary-filled" | "primary-stroke";
    width?: string;
    height?: string;
    children?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface IButtonCircle {
    type: "left" | "right" | "custom";
    width?: string;
    height?: string;
    className?: string;
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
    if (type === "primary-stroke") {
        return (
            <button
                className={`${styles.btn_default} ${styles.btn_primary_stroke}`}
                style={{ width: width, height: height }}
                onClick={onClick}
                {...rest}
            >
                {children}
            </button>
        );
    }
};

export const ButtonCircle: React.FC<IButtonCircle> = ({ type, width, height, className, children, onClick, ...rest }) => {
    return (
        <button className={`${styles.btn_circle} ${className ?? ""}`} style={{ width: width, height: height }} onClick={onClick} {...rest}>
            {type === "left" && <FontAwesomeIcon size="xl" icon={faChevronLeft} />}
            {type === "right" && <FontAwesomeIcon size="xl" icon={faChevronRight} />}
            {type === "custom" && children}
        </button>
    );
};
