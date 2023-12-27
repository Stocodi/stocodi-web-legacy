import { useRef } from "react";
import { Search } from "../../interfaces/forms/Search";

export default function LecturePage() {
    const searchRef = useRef<HTMLInputElement>(null);

    const onSearchBtnClick = () => {
        console.log(searchRef.current?.value);
    };

    return (
        <>
            강의페이지 - 메인
            <Search ref={searchRef} onClick={onSearchBtnClick}></Search>
        </>
    );
}
