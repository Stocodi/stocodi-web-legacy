import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LectureRedirectCard.module.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface ILectureRedirectCard {
    width: string;
    height: string;

    imgSrc: string;
    label: string;
    onClick: React.MouseEventHandler;
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
