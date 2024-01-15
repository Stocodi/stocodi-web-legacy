import YouTube from "react-youtube";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "../../interfaces/feedback/Loader";
import { Badge } from "../../interfaces/display/Badge";
import { LectureProvider } from "../../components/lecture-page/LectureProvider";

import { STATUS, useGetRequest } from "../../hooks/useRequest";
import { IGetLectureByIdResponse } from "../../api/ResponseTypes";
import { ParseVideoId } from "../../utils/YoutubeLinks";

import { PutRequest } from "../../api/Request";
import styles from "./LectureViewPage.module.scss";
import { LectureCommentContainer } from "../../components/lecture-page/LectureComment";
import { GetAccessToken } from "../../api/Authentication";

export default function LectureViewPage() {
    const { id } = useParams();
    const { status, data } = useGetRequest<IGetLectureByIdResponse>(`/lectures/${id as string}`);

    const onHeartClick = async () => {
        const response = await PutRequest<Record<string, never>, { response: boolean }>(
            `/likes/${data?.response.id.toString() as string}`,
            {},
            GetAccessToken(),
        );
        if (response.response === true) alert("좋아요한 강의에 추가되었습니다");
        else alert("좋아요가 취소되었습니다");
    };
    const onBookmarkClick = () => {
        alert("서비스 준비중입니다");
    };

    useEffect(() => {
        // 조회수 올리기
        if (status === STATUS.SUCCESS) {
            PutRequest(`/lectures/views/${data?.response.id.toString() as string}`, {});
        }
    }, [status, data?.response.id]);

    if (status !== STATUS.SUCCESS) return <Loader></Loader>;

    return (
        <>
            <div className={styles.player_wrapper}>
                <div className={styles.player_section}>
                    <YouTube
                        className={styles.video_player_container}
                        iframeClassName={styles.video_player}
                        opts={{
                            playerVars: {
                                autoplay: 0, //자동 재생 여부
                                modestbranding: 0, //컨트롤 바에 유튜브 로고 표시 여부
                                loop: 0, //반복 재생
                            },
                        }}
                        videoId={ParseVideoId(data?.response.video_link as string)}
                    />

                    <div className={styles.video_info}>
                        <h2>{data?.response.title}</h2>

                        <LectureProvider
                            name={data?.response.author as string}
                            description={`조회수 ${data?.response.views.toString() as string} 회 | 좋아요 ${
                                data?.response.likes.toString() as string
                            } 개`}
                            onHeartClick={onHeartClick}
                            onBookmarkClick={onBookmarkClick}
                        />

                        <div className={styles.video_description}>
                            <div>
                                {data?.response.tags.map((element, index) => {
                                    return (
                                        <Badge key={index} type="primary-stroke">
                                            {element}
                                        </Badge>
                                    );
                                })}
                            </div>

                            <div>{data?.response.description}</div>
                        </div>
                    </div>
                </div>

                <div className={styles.comment_section}>
                    <LectureCommentContainer lectureId={data?.response.id as number} />
                </div>
            </div>
        </>
    );
}
