import { Badge } from "../../../components/display/Badge";
import { Avatar } from "../../../components/display/Avatar";
import styles from "./LectureList.module.scss";
import { useNavigate } from "react-router-dom";

export interface ILectureListContainer {
    children: React.ReactNode;
}
export interface ILectureListItem {
    id: number;
    imgSrc: string;
    avatarImgSrc: string;
    title: string;
    author: string;
    views: number;
    likes: number;
    tags: string[];
}

export const LectureList = {
    Container: ({ children }: ILectureListContainer) => {
        return <div className={styles.lecture_list_container}>{children}</div>;
    },

    Item: ({ id, imgSrc, avatarImgSrc, title, author, views, likes, tags }: ILectureListItem) => {
        const navigate = useNavigate();

        return (
            <div className={styles.lecture_list_item} onClick={() => navigate(`/lectures/view/${id}`)}>
                <div className={styles.lecture_img_container}>
                    <img src={imgSrc} alt="lecture-thumbnail" />
                </div>

                <div className={styles.lecture_meta_container}>
                    <h2>{title}</h2>
                    <p>
                        <span>조회수 {views} 회</span>|<span>좋아요 {likes} 개</span>
                    </p>

                    <Avatar imgSrc={avatarImgSrc} className={styles.author}>
                        {author}
                    </Avatar>

                    <div className={styles.tags}>
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
