import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { LectureList } from "./components/LectureList";
import { Search } from "../../components/forms/Search";
import { Loader } from "../../components/feedback/Loader";

import { GetSearchParams } from "../../utils/SearchParams";
import { ParseVideoId } from "../../utils/YoutubeLinks";

import styles from "./LectureSearchResultPage.module.scss";

import { useQuery } from "@tanstack/react-query";
import { lectureService } from "../../api/services/lecture.service";

export default function LectureSearchResultPage() {
    const navigate = useNavigate();
    const searchRef = useRef<HTMLInputElement>(null);
    const [searchParams] = useSearchParams();

    const { data, isPending } = useQuery({
        queryKey: ["lectures", GetSearchParams(searchParams, "key")],
        queryFn: () => lectureService.searchLecture(GetSearchParams(searchParams, "key")),
    });

    const onSearch = () => {
        // 검색어가 유효한 경우에만 검색 페이지로 이동
        if (!searchRef.current?.value || searchRef.current?.value.trim() === "") {
            alert("검색어를 입력하세요.");
            return;
        }
        navigate(`/lectures/search?key=${searchRef.current?.value}`);
    };

    if (isPending) return <Loader />;

    return (
        <>
            <div className={styles.search_section}>
                <Search ref={searchRef} placeholder={GetSearchParams(searchParams, "key")} onClick={onSearch}></Search>
            </div>

            <div className={styles.search_results}>
                <LectureList.Container>
                    {data?.response.map((element) => {
                        return (
                            <LectureList.Item
                                id={element.id}
                                title={element.title}
                                author={element.description}
                                views={element.views}
                                likes={element.likes}
                                imgSrc={`https://img.youtube.com/vi/${ParseVideoId(element.video_link)}/0.jpg`}
                                avatarImgSrc={"/icons/profile.png"}
                                tags={element.tags}
                            />
                        );
                    })}
                </LectureList.Container>
            </div>
        </>
    );
}
