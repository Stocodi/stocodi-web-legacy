import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Search } from "../../interfaces/forms/Search";
import { Badge } from "../../interfaces/display/Badge";
import { Loader } from "../../interfaces/feedback/Loader";

import { LectureSection } from "../../components/lecture-page/LectureSection";
import { LectureCard } from "../../components/lecture-page/LectureCard";
import { Carousel } from "../../components/lecture-page/Carousel";
import { STATUS, useGetRequest } from "../../hooks/useRequest";
import { IGetAllLectureResponse } from "../../api/ResponseTypes";

import styles from "./LecturePage.module.scss";

//test
import { LectureData } from "../../constants/__test__/Lecture";
import { ParseVideoId } from "../../utils/YoutubeLinks";

export default function LecturePage() {
    const navigate = useNavigate();
    const searchRef = useRef<HTMLInputElement>(null);

    const { status, data } = useGetRequest<IGetAllLectureResponse>("/lectures");

    const onSearchBtnClick = () => {
        if (typeof searchRef.current?.value === "string") {
            navigate(`/lectures/search?key=${searchRef.current?.value}`);
        }
    };

    const CAROUSEL_LINK = [
        "https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=1800&t=st=1704845048~exp=1704845648~hmac=90a735e8f1f6ac7b1877466412724360ea3405a5b66610507ef5308ce8c69a1b",
        "https://img.freepik.com/premium-vector/abstract-pastel-color-background-with-pink-purple-gradient-effect-graphic-design-decoration_120819-463.jpg",
        "https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg",
    ];

    return (
        <>
            <div className={styles.search_section}>
                <Carousel carouselList={CAROUSEL_LINK}></Carousel>
                <Search ref={searchRef} onClick={onSearchBtnClick} placeholder="원하는 강좌를 검색해보세요!"></Search>

                <div className={styles.badge_container}>
                    <span>인기태그👉</span>
                    <Badge type="primary-stroke">해시태그</Badge>
                    <Badge type="primary-stroke">해시태그</Badge>
                    <Badge type="primary-stroke">해시태그</Badge>
                    <Badge type="primary-stroke">해시태그</Badge>
                    <Badge type="primary-stroke">해시태그</Badge>
                    <Badge type="primary-stroke">해시태그</Badge>
                </div>
            </div>

            {status !== STATUS.SUCCESS ? (
                <Loader />
            ) : (
                <>
                    <LectureSection title="Recently Uploaded">
                        {data?.response.map((element, index) => {
                            return (
                                <LectureCard.Default
                                    key={index}
                                    title={element.title}
                                    publisher={element.description}
                                    imgSrc={`https://img.youtube.com/vi/${ParseVideoId(element.video_link)}/0.jpg`}
                                    tags={element.tags}
                                    onClick={() => navigate(`/lectures/view/${element.id}`)}
                                />
                            );
                        })}
                    </LectureSection>
                </>
            )}

            <LectureSection title="지금 시청중인 강의">
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
            </LectureSection>

            <LectureSection title="실시간 인기강의">
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
            </LectureSection>
        </>
    );
}
