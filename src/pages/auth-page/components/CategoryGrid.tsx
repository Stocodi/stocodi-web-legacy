import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { UserSignupActions } from "../../../store/user-signup-slice";

import styles from "./CategoryGrid.module.scss";

export interface ICategoryGridContainer {
    children: React.ReactNode;
}

export interface ICategoryGridItem {
    icon: string;
    text: string;
}

export const CategoryGrid = {
    Container: ({ children }: ICategoryGridContainer) => {
        return <div className={styles.category_grid_container}>{children}</div>;
    },

    Item: ({ icon, text }: ICategoryGridItem) => {
        const dispatch: Dispatch = useDispatch();
        const itemRef = useRef<HTMLDivElement>(null);

        const onToggleCategory = () => {
            dispatch(UserSignupActions.toggleCategory(text));
            itemRef.current?.classList.toggle(`${styles.active}`);
        };

        return (
            <div ref={itemRef} className={`${styles.category_grid_item}`} onClick={onToggleCategory}>
                <img src={icon} alt={`icon-${text}`} />
                <p>{text}</p>
            </div>
        );
    },
};
