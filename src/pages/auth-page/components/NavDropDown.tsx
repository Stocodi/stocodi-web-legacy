import { useCallback, useLayoutEffect, useState } from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { GetNickName } from "../../../api/config/cookies";
import { authService } from "../../../api/services/auth.service";

import styles from "./NavDropDown.module.scss";

export const NavDropDown: React.FC = () => {
    const [dropdown, setDropdown] = useState<boolean>(false);

    const onDropdownToggle = useCallback(() => {
        setDropdown(!dropdown);
    }, [dropdown]);

    const onLogout = async () => {
        try {
            await authService.signOut();
            alert("로그아웃 되었습니다");
            window.location.href = "/";
        } catch (err) {
            alert("로그아웃에 실패하였습니다. 시스템 관리자에게 문의주세요");
        }
    };

    useLayoutEffect(() => {
        const $dropdown = document.querySelector<HTMLDivElement>(`.${styles.nav_dropdown_container}`);
        const $item = document.querySelector<HTMLDivElement>(`.${styles.nav_dropdown_item}`);

        if (dropdown && $dropdown) {
            $dropdown.style.maxHeight = `${($item?.scrollHeight as number) * $dropdown.children.length}px`;
        }
        if (!dropdown && $dropdown) {
            $dropdown.style.maxHeight = `0px`;
        }
    }, [dropdown]);

    return (
        <li className={styles.nav_dropdown_wrapper}>
            <div className={styles.nav_dropdown_header} onClick={onDropdownToggle}>
                <span>{GetNickName()} 님</span>
                <span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </div>

            <div className={styles.nav_dropdown_container}>
                <div className={styles.nav_dropdown_item}>내 정보 수정</div>
                <div className={styles.nav_dropdown_item}>FAQ</div>
                <div className={styles.nav_dropdown_item}>고객센터</div>
                <div onClick={onLogout} className={styles.nav_dropdown_item}>
                    로그아웃
                </div>
            </div>
        </li>
    );
};
