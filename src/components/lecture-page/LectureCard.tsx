import { MouseEventHandler } from "react";
import { Badge } from "../../interfaces/display/Badge";
import styles from "./LectureCard.module.scss";

export interface ILectureCardDefault {
    title: string;
    imgSrc: string;
    publisher: string;
    description?: string;
    tags: string[];
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export const LectureCard = {
    Default: ({ title, imgSrc, publisher, tags, onClick }: ILectureCardDefault) => {
        return (
            <div className={styles.lecture_card_default} onClick={onClick}>
                <img src={imgSrc} alt="lecture-card-img" />
                <div className={styles.lecture_card_body}>
                    <h3>{title}</h3>
                    <p>{publisher}</p>
                    <div>
                        {tags.map((element, index) => {
                            return (
                                <Badge key={index} type="primary-light">
                                    {element}
                                </Badge>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    },
};
