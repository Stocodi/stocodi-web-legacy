import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Search } from "../../components/forms/Search";
import { Loader } from "../../components/feedback/Loader";

import { LectureSection } from "./components/LectureSection";
import { LectureCard } from "./components/LectureCard";
import { Carousel } from "./components/Carousel";

import styles from "./LecturePage.module.scss";

import { CarouselList } from "../../constants/Carousel";
//test
import { ParseVideoId } from "../../utils/YoutubeLinks";

import { lectureService } from "../../api/services/lecture.service";
import { useQuery } from "@tanstack/react-query";

export default function LecturePage() {
    const navigate = useNavigate();
    const searchRef = useRef<HTMLInputElement>(null);

    const { data, isPending } = useQuery({
        queryKey: ["lectures", "all"],
        queryFn: lectureService.getAllLectures,
        staleTime: 10000,
        gcTime: 100000,
    });

    const onSearchBtnClick = () => {
        if (!searchRef.current?.value || searchRef.current?.value.trim() === "") {
            alert("검색어를 입력하세요.");
            return;
        }
        // 검색어가 유효한 경우에만 검색 페이지로 이동
        navigate(`/lectures/search?key=${searchRef.current?.value}`);
    };

    return (
        <>
            <Carousel carouselList={CarouselList}></Carousel>
            <div className={styles.search_section}>
                <Search ref={searchRef} onClick={onSearchBtnClick} placeholder="원하는 강좌를 검색해보세요!"></Search>

                {/* <div className={styles.badge_container}>
                    <span>인기태그👉</span>
                    <Badge type="primary-stroke">해시태그</Badge>
                    <Badge type="primary-stroke">해시태그</Badge>
                    <Badge type="primary-stroke">해시태그</Badge>
                    <Badge type="primary-stroke">해시태그</Badge>
                    <Badge type="primary-stroke">해시태그</Badge>
                    <Badge type="primary-stroke">해시태그</Badge>
                </div> */}
            </div>

            {isPending ? (
                <Loader />
            ) : (
                <>
                    <LectureSection title="최근업로드">
                        {data?.response.map((element, index) => {
                            return (
                                <LectureCard.Light
                                    key={index}
                                    title={element.title}
                                    publisher={element.author}
                                    imgSrc={`https://img.youtube.com/vi/${ParseVideoId(element.video_link)}/0.jpg`}
                                    onClick={() => navigate(`/lectures/view/${element.id}`)}
                                />
                            );
                        })}
                    </LectureSection>
                </>
            )}

            <LectureSection title="실시간 인기강의">
                {// 조회수 가장많은 5개의 강의를 가져옴
                data?.response
                    .sort((e1, e2) => e2.views - e1.views)
                    .slice(0, 10)
                    .map((element, index) => {
                        return (
                            <LectureCard.Rank
                                key={index}
                                rank={index + 1}
                                title={element.title}
                                publisher={element.author}
                                imgSrc={`https://img.youtube.com/vi/${ParseVideoId(element.video_link)}/0.jpg`}
                                onClick={() => navigate(`/lectures/view/${element.id}`)}
                            />
                        );
                    })}
            </LectureSection>

            {/* <LectureSection title="지금 주목받는 강사진">
                {LectureData.map((element, index) => {
                    return (
                        <LectureCard.Default
                            key={index}
                            title={element.title}
                            publisher={element.publisher}
                            imgSrc={element.imgSrc}
                            tags={element.tags}
                        />
                    );
                })}
            </LectureSection> */}
        </>
    );
}
