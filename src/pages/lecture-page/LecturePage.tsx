import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Search } from "../../interfaces/forms/Search";
import { Badge } from "../../interfaces/display/Badge";

import { LectureSection } from "../../components/lecture-page/LectureSection";
import { LectureCard } from "../../components/lecture-page/LectureCard";

import styles from "./LecturePage.module.scss";

//test
import { LectureData } from "../../constants/__test__/Lecture";
import { STATUS, useGetRequest } from "../../hooks/useRequest";
import { Loader } from "../../interfaces/feedback/Loader";
import { IGetAllLectureResponse } from "../../api/ResponseTypes";

export default function LecturePage() {
    const navigate = useNavigate();
    const searchRef = useRef<HTMLInputElement>(null);

    const { status, data } = useGetRequest<IGetAllLectureResponse>("/lectures");

    const onSearchBtnClick = () => {
        if (typeof searchRef.current?.value === "string") {
            navigate(`/lectures/search?key=${searchRef.current?.value}`);
        }
    };

    return (
        <>
            <div className={styles.search_section}>
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
                                    imgSrc={"/img/test-thumbnail.webp"}
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
