import { Outlet } from "react-router-dom";
import styles from "./TestLayout.module.scss";
import { BreadCrumb } from "../components/test-page/BreadCrumb";

export default function TestLayout() {
    return (
        <main className={styles.test_page}>
            <div className={styles.title}>
                <h1>금융역량테스트</h1>
                <h3>총 26문항으로, 전 문항 객관식으로 구성되어 있습니다</h3>
            </div>

            <BreadCrumb cursor={4} items={["경제기초", "은행상품", "카드와 신용", "세금", "보험", "투자"]} />

            <Outlet />
        </main>
    );
}
