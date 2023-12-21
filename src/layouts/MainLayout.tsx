import { Outlet } from "react-router-dom";
import { NavTop } from "../interfaces/navigation/Nav";
import { NavAside } from "../interfaces/navigation/NavAside";

import styles from "./MainLayout.module.scss";

export const MainLayout: React.FC = () => {
    return (
        <>
            <NavTop />
            <NavAside />
            <main className={styles.main}>
                <Outlet />
            </main>
        </>
    );
};
