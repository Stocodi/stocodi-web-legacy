import styles from "./Loader.module.scss";

export const Loader = () => {
    return (
        <div className={styles.loader_container}>
            <span className={styles.loader}></span>
        </div>
    );
};
