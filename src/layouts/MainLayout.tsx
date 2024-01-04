import { Outlet } from "react-router-dom";
import { NavTop } from "../interfaces/navigation/Nav";
import { NavAside } from "../interfaces/navigation/NavAside";
import { Footer } from "../interfaces/display/Footer";

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
