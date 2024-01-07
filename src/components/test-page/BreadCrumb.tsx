import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./BreadCrumb.module.scss";

export interface IBreadCrumb {
    items: string[];
    cursor: number;
}

export const BreadCrumb: React.FC<IBreadCrumb> = ({ items, cursor }) => {
    if (cursor > items.length) throw new Error("cursor 는 items.length 보다 작아야합니다");

    return (
        <div className={styles.breadcrumb}>
            <div className={styles.breadcrumb_items}>
                {items.map((element, index) => {
                    return (
                        <Fragment key={index}>
                            <span style={index === cursor ? { color: "#000" } : { color: "#bdbdbd" }}>{element}</span>
                            {index !== items.length - 1 && (
                                <span>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </span>
                            )}
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};
