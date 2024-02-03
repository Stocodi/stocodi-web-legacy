import styles from "./Comment.module.scss";

export interface IComment {
    isVisible: boolean;
    children: React.ReactNode;
}

export interface IIsCorrect {
    value: boolean | null;
}

export const Comment: React.FC<IComment> = ({ isVisible, children }) => {
    return <>{isVisible && <div className={styles.comment}>{children}</div>}</>;
};

export const IsCorrect: React.FC<IIsCorrect> = ({ value }) => {
    return (
        <>
            {value !== null && (
                <div className={styles.ans}>
                    <img src={`/icons/is_correct_${value.toString()}.svg`} alt="iscorrect" />
                </div>
            )}
        </>
    );
};
