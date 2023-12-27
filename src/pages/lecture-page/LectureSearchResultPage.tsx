import { useSearchParams } from "react-router-dom";

export default function LectureSearchResultPage() {
    const params = useSearchParams();

    return <>강의페이지 - 검색결과 {params}</>;
}
