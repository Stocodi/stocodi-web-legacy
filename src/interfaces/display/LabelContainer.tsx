import styles from "./LabelContainer.module.scss";

export interface ILabelContainer {
    label: string;
    children: React.ReactNode;
    width?: string;
}

export const LabelContainer: React.FC<ILabelContainer> = ({ label, children, width }) => {
    return (
        <div className={styles.label_container} style={{ width: width }}>
            <p>{label}</p>
            <div>{children}</div>
        </div>
    );
};
