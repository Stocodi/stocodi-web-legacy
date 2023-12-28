import styles from "./Avatar.module.scss";

export interface IAvatar {
    width?: string;
    height?: string;
    imgSrc: string;
    children?: React.ReactNode;
}

export const Avatar: React.FC<IAvatar> = ({ width, height, imgSrc, children }) => {
    return (
        <div className={styles.avatar} style={{ width: width, height: height }}>
            <img src={imgSrc} alt="profile" />
            {children}
        </div>
    );
};
