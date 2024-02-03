import styles from "./AvatarSection.module.scss";

import dollarBackground from "@/assets/dollar-bg.png";

export interface IAvatarSection {
    avatarImg: string;
    phrase: string;
    author: string;
}

export const AvatarSection: React.FC<IAvatarSection> = ({ avatarImg, phrase, author }) => {
    return (
        <div className={styles.avatar_section}>
            <img className={styles.bg} src={dollarBackground} alt="" />
            <div className={styles.avatar}>
                <img src={avatarImg} alt="avatar-img" />
                <div className={styles.speech_bubble}>
                    <h1>{phrase}</h1>
                    <p>{author}</p>
                </div>
            </div>
        </div>
    );
};
