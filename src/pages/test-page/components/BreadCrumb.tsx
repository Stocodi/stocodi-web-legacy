import { Fragment } from "react";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./BreadCrumb.module.scss";

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
                            <div className={cursor === index + 1 ? styles.active : ""}>{element}</div>
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
