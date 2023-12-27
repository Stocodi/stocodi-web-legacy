import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Search } from "../../interfaces/forms/Search";
import { Badge } from "../../interfaces/display/Badge";

export default function LecturePage() {
    const navigate = useNavigate();

    const searchRef = useRef<HTMLInputElement>(null);

    const onSearchBtnClick = () => {
        if (typeof searchRef.current?.value === "string") {
            navigate(`/lectures/search?query=${searchRef.current?.value}`);
        }
    };

    return (
        <>
            강의페이지 - 메인
            <Search ref={searchRef} onClick={onSearchBtnClick}></Search>
            <Badge type="primary-stroke">해시태그</Badge>
        </>
    );
}
