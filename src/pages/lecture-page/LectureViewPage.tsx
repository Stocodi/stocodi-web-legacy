import { useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

import { useQuery } from "@tanstack/react-query";

import { Badge } from "../../components/display/Badge";
import { Loader } from "../../components/feedback/Loader";
import { LectureCommentContainer } from "./components/LectureComment";
import { LectureProvider } from "./components/LectureProvider";

import { ParseVideoId } from "../../utils/YoutubeLinks";

import { GetAccessToken } from "../../api/config/cookies";
import { lectureService } from "../../api/services/lecture.service";

import styles from "./LectureViewPage.module.scss";

export default function LectureViewPage() {
    const { id } = useParams();

    const { isPending, data } = useQuery({
        queryKey: ["lectures", id],
        queryFn: () => lectureService.getLectureById(Number(id)),
        staleTime: 10000,
    });

    const onHeartClick = async () => {
        const response = await lectureService.toggleLikeLecture(Number(id), GetAccessToken());
        if (response === true) alert("좋아요한 강의에 추가되었습니다");
        else alert("좋아요가 취소되었습니다");
    };

    const onBookmarkClick = () => {
        alert("서비스 준비중입니다");
    };

    useEffect(() => {
        // 조회수 올리기
        if (!isPending) lectureService.viewLecture(Number(id));
    }, [isPending, id]);

    if (isPending) return <Loader />;

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
