import { Outlet } from "react-router-dom";

import { Footer } from "../display/Footer";
import { NavTop } from "../navigation/Nav";
import { NavAside } from "../navigation/NavAside";

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
