import styles from "./Title.module.scss";

export interface ITitle {
    title: string;
    subtitle: string;
}

export const Title: React.FC<ITitle> = ({ title, subtitle }) => {
    return (
        <div className={styles.title}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};
