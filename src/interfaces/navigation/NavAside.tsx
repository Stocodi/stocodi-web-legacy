import { useLayoutEffect, useRef } from "react";

import { NavMenu } from "../../constants/NavMenu";
import { NavLink } from "react-router-dom";
import { NavLinkStyle } from "../../utils/NavLinkStyle";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import styles from "./NavAside.module.scss";

export interface INavAsideItem {
    to: string;
    children: string;
}

export const NavAside = () => {
    const { isNavOpen } = useSelector((state: RootState) => state.UserInterface);

    const asideRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (asideRef.current) {
            if (isNavOpen) {
                asideRef.current.style.transform = `translateX(0px)`;
            }
            if (!isNavOpen) {
                asideRef.current.style.transform = `translateX(300px)`;
            }
        }
    }, [isNavOpen]);

    return (
        <div ref={asideRef} className={styles.nav_aside_wrapper}>
            <aside className={styles.nav_aside_container}>
                {NavMenu?.map((element) => {
                    return (
                        <NavAsideItem key={element.key} to={element.to}>
                            {element.text}
                        </NavAsideItem>
                    );
                })}
            </aside>
        </div>
    );
};

export const NavAsideItem: React.FC<INavAsideItem> = ({ to, children }) => {
    return (
        <div className={styles.nav_aside_item}>
            <NavLink to={to} style={NavLinkStyle}>
                {children}
            </NavLink>
        </div>
    );
};
