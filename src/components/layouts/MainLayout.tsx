import { Outlet } from "react-router-dom";
import { NavTop } from "../navigation/Nav";
import { NavAside } from "../navigation/NavAside";
import { Footer } from "../display/Footer";

import styles from "./MainLayout.module.scss";

export const MainLayout: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <NavTop />
                <NavAside />
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};
