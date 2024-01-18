import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./BreadCrumb.module.scss";
import { Fragment } from "react";

export interface IBreadCrumb {
    items: string[];
    cursor: number;
}

export const BreadCrumb: React.FC<IBreadCrumb> = ({ items, cursor }) => {
    if (cursor > items.length) throw new Error("cursor 는 items.length 보다 작아야합니다");

    return (
        <div className={styles.breadcrumb}>
            <div className={styles.breadcrumb_container}>
                {items.map((element, index) => {
                    return (
                        <Fragment key={index}>
                            <div style={cursor === index + 1 ? { color: "black" } : {}}>{element}</div>
                            <div>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};
