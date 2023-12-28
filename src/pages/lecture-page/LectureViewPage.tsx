import YouTube from "react-youtube";
import { useParams } from "react-router-dom";

import { Loader } from "../../interfaces/feedback/Loader";
import { LectureProvider } from "../../components/lecture-page/LectureProvider";

import { STATUS, useGetRequest } from "../../hooks/useRequest";
import { IGetLectureByIdResponse } from "../../api/ResponseTypes";
import { ParseVideoId } from "../../utils/YoutubeLinks";

import styles from "./LectureViewPage.module.scss";
import { Badge } from "../../interfaces/display/Badge";
import { useEffect } from "react";
import { PutRequest } from "../../api/Request";

export default function LectureViewPage() {
    const { id } = useParams();
    const { status, data } = useGetRequest<IGetLectureByIdResponse>(`/lectures/${id as string}`);

    const onHeartClick = () => {
        alert("서비스 준비중입니다");
    };
    const onBookmarkClick = () => {
        alert("서비스 준비중입니다");
    };

    useEffect(() => {
        // 조회수 올리기
        if (status === STATUS.SUCCESS) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
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
                                autoplay: 1, //자동 재생 여부
                                modestbranding: 0, //컨트롤 바에 유튜브 로고 표시 여부
                                loop: 0, //반복 재생
                            },
                        }}
                        videoId={ParseVideoId(data?.response.video_link as string)}
                    ></YouTube>

                    <div className={styles.video_info}>
                        <h2>{data?.response.title}</h2>

                        <LectureProvider
                            name="스토코디"
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
                    <div>댓글</div>
                    <div>추가영상</div>
                </div>
            </div>
        </>
    );
}
