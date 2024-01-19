import styles from "./ShareSection.module.scss";

export interface IShareSection {
    children: React.ReactNode;
}

export interface IShareItem {
    icon: string;
    label: string;
    onClick?: React.MouseEventHandler;
}

export const ShareSection: React.FC<IShareSection> = ({ children }) => {
    return (
        <div className={styles.share_section}>
            <div className={styles.head}>
                <p>공유하기</p>
            </div>

            <div className={styles.body}>{children}</div>
        </div>
    );
};

export const ShareItem: React.FC<IShareItem> = ({ icon, label, onClick }) => {
    return (
        <div className={styles.share_item} onClick={onClick}>
            <div className={styles.img_container}>
                <img src={icon} alt="share-item-icon" />
            </div>
            <p>{label}</p>
        </div>
    );
};
