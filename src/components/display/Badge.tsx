import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Badge.module.scss";

export interface IBadge {
    type: "primary-stroke" | "primary-light";
    children: React.ReactNode;
}

export const Badge: React.FC<IBadge> = ({ type, children }) => {
    if (type === "primary-stroke") {
        return (
            <div className={`${styles.badge} ${styles.primary_stroke}`}>
                <FontAwesomeIcon icon={faHashtag} />
                <span>{children}</span>
            </div>
        );
    }
    if (type === "primary-light") {
        return (
            <div className={`${styles.badge} ${styles.primary_light}`}>
                <FontAwesomeIcon icon={faHashtag} />
                <span>{children}</span>
            </div>
        );
    }
};
