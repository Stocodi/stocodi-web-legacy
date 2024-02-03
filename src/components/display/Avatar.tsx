import styles from "./Avatar.module.scss";

export interface IAvatar {
    className?: string;
    width?: string;
    height?: string;
    imgSrc: string;
    children?: React.ReactNode;
}

export const Avatar: React.FC<IAvatar> = ({ className, width, height, imgSrc, children }) => {
    return (
        <div className={`${styles.avatar} ${className ?? ""}`} style={{ width: width, height: height }}>
            <img src={imgSrc} alt="profile" />
            <div>{children}</div>
        </div>
    );
};
