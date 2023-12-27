import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.scss";

export const AuthLayout = () => {
    return (
        <div className={styles.auth_page}>
            <div className={styles.auth_page_background}>
                <img src="/img/auth-background.png" alt="Auth Background" />
            </div>

            <div className={styles.auth_page_wrapper}>
                <Outlet />
            </div>
        </div>
    );
};
