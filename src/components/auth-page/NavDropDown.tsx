import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { GetNickName, handleLogout } from "../../api/Authentication";
import styles from "./NavDropDown.module.scss";

export const NavDropDown: React.FC = () => {
    const [dropdown, setDropdown] = useState<boolean>(false);

    const onDropdownToggle = useCallback(() => {
        setDropdown(!dropdown);
    }, [dropdown]);

    const onLogout = async () => {
        try {
            await handleLogout();
            alert("로그아웃 되었습니다");
            window.location.href = "/";
        } catch (err) {
            alert("로그아웃에 실패하였습니다. 시스템 관리자에게 문의주세요");
        }
    };

    return (
        <li className={styles.nav_dropdown_wrapper}>
            <div className={styles.nav_dropdown_header} onClick={onDropdownToggle}>
                <span>{GetNickName()} 님</span>
                <span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            </div>

            {dropdown && (
                <div className={styles.nav_dropdown_container}>
                    <div className={styles.nav_dropdown_item}>내 정보 수정</div>
                    <div className={styles.nav_dropdown_item}>FAQ</div>
                    <div className={styles.nav_dropdown_item}>고객센터</div>
                    <div onClick={onLogout} className={styles.nav_dropdown_item}>
                        로그아웃
                    </div>
                </div>
            )}
        </li>
    );
};
