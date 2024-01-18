import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { LectureList } from "../../components/lecture-page/LectureList";
import { Search } from "../../interfaces/forms/Search";

import { IGetAllLectureResponse } from "../../api/ResponseTypes";
import { STATUS, useGetRequest } from "../../hooks/useRequest";

import { GetSearchParams } from "../../utils/SearchParams";
import { ParseVideoId } from "../../utils/YoutubeLinks";
import { Loader } from "../../interfaces/feedback/Loader";

import styles from "./LectureSearchResultPage.module.scss";

export default function LectureSearchResultPage() {
    const navigate = useNavigate();
    const searchRef = useRef<HTMLInputElement>(null);
    const [searchParams] = useSearchParams();

    const { status, data } = useGetRequest<IGetAllLectureResponse>(`/lectures/search?key=${GetSearchParams(searchParams, "key")}`);

    const onSearch = () => {
        if (!searchRef.current?.value || searchRef.current?.value.trim() === "") {
            alert("검색어를 입력하세요.");
            return;
        }
        // 검색어가 유효한 경우에만 검색 페이지로 이동
        navigate(`/lectures/search?key=${searchRef.current?.value}`);
    };

    if (status !== STATUS.SUCCESS) return <Loader />;

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
                                avatarImgSrc="/icons/profile.png"
                                tags={element.tags}
                            />
                        );
                    })}
                </LectureList.Container>
            </div>
        </>
    );
}
