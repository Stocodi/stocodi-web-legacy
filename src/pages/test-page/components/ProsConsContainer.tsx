import styles from "./ProsConsContainer.module.scss";

import prosIcon from "@/assets/pros-icon.png";
import consIcon from "@/assets/cons-icon.png";

export interface IProsConsContainer {
    type: "pros" | "cons";
    width?: string;
    height?: string;
    title: string;
}

export const ProsConsContainer: React.FC<IProsConsContainer> = ({ type, width, height, title }) => {
    return (
        <div className={styles.pros_cons_container} style={{ width, height }}>
            <img src={type === "pros" ? prosIcon : consIcon} alt="" />
            <div>
                <p>이 분야에 {type === "pros" ? "강" : "약"}해요!</p>
                <h1>{title}</h1>
            </div>
        </div>
    );
};
