import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.scss";

import background from "@/assets/auth-page/background.png";

export const AuthLayout = () => {
    return (
        <div className={styles.auth_page}>
            <div className={styles.auth_page_background}>
                <img src={background} alt="SignIn Background" />
            </div>

            <div className={styles.auth_page_wrapper}>
                <Outlet />
            </div>
        </div>
    );
};
