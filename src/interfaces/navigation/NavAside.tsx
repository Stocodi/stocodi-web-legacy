import { useLayoutEffect, useRef } from "react";

import { NavMenu } from "../../constants/NavMenu";
import { NavLink } from "react-router-dom";
import { NavLinkStyle } from "../../utils/NavLinkStyle";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavAside } from "../../hooks/useNavAside";

import styles from "./NavAside.module.scss";
import { GetAccessToken, GetNickName } from "../../utils/Authentication";

export interface INavAsideItem {
    to: string;
    children: string;
}

export const NavAside = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const asideRef = useRef<HTMLDivElement>(null);
    const asideBgRef = useRef<HTMLDivElement>(null);

    useNavAside(asideRef, asideBgRef, navRef);

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

                    {!GetAccessToken() ? (
                        <NavAsideItem to="/auth/signin">로그인/회원가입</NavAsideItem>
                    ) : (
                        <div className={styles.nav_aside_user_items}>
                            <div>{GetNickName()} 님</div>
                            <div>내 정보 변경</div>
                            <div>FAQ</div>
                            <div>내 정보 변경</div>
                            <div>로그아웃</div>
                        </div>
                    )}
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
