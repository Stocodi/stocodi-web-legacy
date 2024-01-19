import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./LectureRedirectCard.module.scss";

export interface ILectureRedirectCard {
    width?: string;
    height?: string;

    imgSrc: string;
    label: string;
    onClick?: React.MouseEventHandler;
}

export interface ILectureRedirectLink {
    label: string;
    link: string;
}

export const LectureRedirectCard: React.FC<ILectureRedirectCard> = ({ width, height, imgSrc, label, onClick }) => {
    return (
        <div className={styles.lecture_redirect_card} style={{ width: width, height: height }}>
            <div className={styles.body}>
                <p>{label}</p>

                <button onClick={onClick}>
                    <span>강의 보러가기</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

            <img className={styles.background} src={imgSrc} alt="lecture-redirect-bg" />
        </div>
    );
};

export const LectureRedirectLink: React.FC<ILectureRedirectLink> = ({ label, link }) => {
    return (
        <div className={styles.lecture_redirect_link}>
            <Link to={link}>
                <span>{label}</span>
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>
    );
};
