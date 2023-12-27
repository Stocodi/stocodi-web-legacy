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

    const navRef = useRef<HTMLDivElement>(null);
    const asideRef = useRef<HTMLDivElement>(null);
    const asideBgRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;
        if (asideRef.current && asideBgRef.current && navRef.current) {
            if (isNavOpen) {
                navRef.current.style.zIndex = `1`;
                asideBgRef.current.style.display = `block`;
                asideRef.current.style.transform = `translateX(0px)`;
            }
            if (!isNavOpen) {
                asideBgRef.current.style.display = `none`;
                asideRef.current.style.transform = `translateX(300px)`;
                timeout = setTimeout(() => navRef.current && (navRef.current.style.zIndex = `0`), 500);
            }
        }
        return () => {
            if (timeout != null) clearTimeout(timeout);
        };
    }, [isNavOpen]);

    return (
        <div ref={navRef} className={styles.nav_aside}>
            <div ref={asideBgRef} className={styles.nav_aside_background}></div>
            <div ref={asideRef} className={styles.nav_aside_wrapper}>
                <aside className={styles.nav_aside_container}>
                    {NavMenu?.map((element) => {
                        return (
                            <NavAsideItem key={element.key} to={element.to}>
                                {element.text}
                            </NavAsideItem>
                        );
                    })}

                    <NavAsideItem to="/auth/signin">로그인/회원가입</NavAsideItem>
                </aside>
            </div>
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
