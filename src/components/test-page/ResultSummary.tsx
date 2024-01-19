import styles from "./ResultSummary.module.scss";
import summaryBackground from "@/assets/summary-bg.svg";

export interface IResultGrid {
    children: React.ReactNode;
}
export interface IResultGridItem {
    category: string;
    score: number;
    icon: string;
}

export const ResultSummary = ({ score }: { score: number }) => {
    return (
        <div className={styles.result_summary}>
            <div>
                <h2>당신의 금융역량 점수는</h2>
                <h1>{score} 점</h1>
            </div>
            <img src={summaryBackground} alt="" />
        </div>
    );
};

export const ResultGrid: React.FC<IResultGrid> = ({ children }) => {
    return (
        <div className={styles.result_grid_container}>
            <div className={styles.result_grid}>{children}</div>
        </div>
    );
};

export const ResultGridItem: React.FC<IResultGridItem> = ({ category, score, icon }) => {
    return (
        <div className={styles.result_grid_item}>
            <h3>{category}</h3>
            <h2>{score} 점</h2>
            <img src={icon} alt="" />
        </div>
    );
};
