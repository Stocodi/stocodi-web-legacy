import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { STATUS } from "../../hooks/useRequest";

import { API_BASE_URL } from "../../api/env";
import { PostRequest } from "../../api/Request";
import { GetAccessToken } from "../../api/Authentication";
import { IGetAllLectureCommentsResponse } from "../../api/ResponseTypes";

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
    const [refetch, setRefetch] = useState(false);

    const [status, setStatus] = useState<STATUS>(STATUS.IDLE);
    const [data, setData] = useState<IGetAllLectureCommentsResponse>();

    // 댓글 작성할때 마다 refetch (deps 에 refetch 추가)
    useEffect(() => {
        try {
            (async () => {
                setStatus(STATUS.PENDING);
                const response = await fetch(API_BASE_URL + `/comments/lectures/${lectureId}`, {
                    method: "GET",
                    headers: { Authorization: `Bearer ${GetAccessToken() as string}` },
                });
                if (!response.ok) throw new Error("댓글 불러오기 실패!");
                const d = (await response.json()) as IGetAllLectureCommentsResponse;
                setStatus(STATUS.SUCCESS);
                setData(d);
            })();
        } catch (err) {
            alert("로그인 후 이용해주세요!");
            navigate("/auth/signin");
        }
    }, [lectureId, navigate, refetch]);

    const onCommentSubmit = async () => {
        try {
            await PostRequest(
                "/comments",
                {
                    lecture_id: lectureId,
                    content: inputRef.current?.value,
                },
                GetAccessToken(),
            );
            inputRef.current?.value && (inputRef.current.value = "");
            setRefetch((refetch) => !refetch); // 댓글 api refetch
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
                {status === STATUS.SUCCESS &&
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
