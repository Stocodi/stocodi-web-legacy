import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { GetAccessToken } from "../../../api/config/cookies";
import { lectureService } from "../../../api/services/lecture.service";

import styles from "./LectureComment.module.scss";

export interface ILectureCommentContainer {
    lectureId: number;
}
export interface ILectureCommentItem {
    author: string;
    content: string;
    createdAt?: string;
}

export const LectureCommentContainer: React.FC<ILectureCommentContainer> = ({ lectureId }) => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    const { isPending, data, refetch } = useQuery({
        queryKey: ["comment", lectureId],
        queryFn: () => lectureService.getAllLectureComments(lectureId),
    });

    const onCommentSubmit = async () => {
        try {
            await lectureService.writeLectureComment(
                {
                    lecture_id: lectureId,
                    content: inputRef.current?.value as string,
                },
                GetAccessToken(),
            );
            inputRef.current?.value && (inputRef.current.value = "");
            refetch();
        } catch (err) {
            alert("로그인 후 이용해주세요");
            navigate("/auth/signin");
        }
    };

    return (
        <form
            className={styles.comment_wrapper}
            onSubmit={async (e) => {
                e.preventDefault();
                await onCommentSubmit();
            }}
        >
            <h3>댓글 {data?.response.length} 개</h3>
            <input ref={inputRef} type="text" placeholder="댓글을 입력하세요" />
            <input type="submit" />
            <div className={styles.comment_container}>
                {!isPending &&
                    data?.response.map((element) => {
                        return (
                            <LectureCommentItem
                                key={element.comment_id}
                                author={element.author}
                                content={element.content}
                                createdAt={element.created_at}
                            />
                        );
                    })}
            </div>
        </form>
    );
};

export const LectureCommentItem: React.FC<ILectureCommentItem> = ({ createdAt, author, content }) => {
    return (
        <div className={styles.comment_item}>
            <h4>
                <span>{author}</span>|<span>{createdAt?.split("T")[0]}</span>
            </h4>
            <p>{content}</p>
        </div>
    );
};
