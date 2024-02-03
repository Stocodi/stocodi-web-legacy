import { MouseEventHandler } from "react";

import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Avatar } from "../../../components/display/Avatar";
import { ButtonCircle } from "../../../components/forms/Button";

import styles from "./LectureProvider.module.scss";

export interface ILectureProvider {
    name: string;
    description: string;
    onHeartClick?: MouseEventHandler<HTMLButtonElement>;
    onBookmarkClick?: MouseEventHandler<HTMLButtonElement>;
}

export const LectureProvider: React.FC<ILectureProvider> = ({ name, description, onHeartClick, onBookmarkClick }) => {
    return (
        <div className={styles.lecture_provider}>
            <div className={styles.provider_container}>
                <Avatar imgSrc="/icons/profile.png">
                    <div className={styles.avatar_info}>
                        <span>{name}</span>
                        <span>{description}</span>
                    </div>
                </Avatar>
            </div>

            <div className={styles.provider_controller}>
                <ButtonCircle type="custom" width="40px" height="40px" onClick={onHeartClick}>
                    <FontAwesomeIcon icon={faHeart} />
                </ButtonCircle>

                <ButtonCircle type="custom" width="40px" height="40px" onClick={onBookmarkClick}>
                    <FontAwesomeIcon icon={faBookmark} />
                </ButtonCircle>
            </div>
        </div>
    );
};
