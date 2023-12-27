import { useCallback } from "react";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { UserInterfaceActions } from "../../store/user-interface-slice";

import { NavDropDown } from "../../components/auth-page/NavDropDown";
import { NavMenu } from "../../constants/NavMenu";
import { NavLinkStyle } from "../../utils/NavLinkStyle";
import { GetAccessToken } from "../../utils/Authentication";

import styles from "./Nav.module.scss";

export interface INavItem {
    to: string;
    children: React.ReactNode;
}

export const NavTop: React.FC = () => {
    const dispatch: Dispatch = useDispatch();

    const onNavToggle = useCallback(() => {
        dispatch(UserInterfaceActions.toggleNav());
    }, [dispatch]);

    return (
        <nav className={styles.nav_wrapper}>
            <ul className={styles.nav_container}>
                <NavHeadItem />
                <li style={{ flexGrow: 1 }} />
                {NavMenu?.map((element) => {
                    return (
                        <NavItem key={element.key} to={element.to}>
                            {element.text}
                        </NavItem>
                    );
                })}

                {!GetAccessToken() ? <NavItem to="/auth/signin">로그인/회원가입</NavItem> : <NavDropDown />}

                <li className={styles.nav_toggle_btn} onClick={onNavToggle}>
                    <FontAwesomeIcon icon={faBars} />
                </li>
            </ul>
        </nav>
    );
};

export const NavHeadItem: React.FC = () => {
    return (
        <li className={styles.nav_head}>
            <Link to="/">
                <img src="/icons/stocodi.svg" alt="" />
            </Link>
        </li>
    );
};

export const NavItem: React.FC<INavItem> = ({ to, children }) => {
    return (
        <li className={styles.nav_item}>
            <NavLink to={to} style={NavLinkStyle}>
                {children}
            </NavLink>
        </li>
    );
};
