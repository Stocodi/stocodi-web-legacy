import { Outlet } from "react-router-dom";
import styles from "./TestLayout.module.scss";

export default function TestLayout() {
    return (
        <main className={styles.test_page}>
            <Outlet />
        </main>
    );
}
