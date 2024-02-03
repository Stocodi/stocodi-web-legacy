import { useNavigate } from "react-router-dom";

import { Button } from "../components/forms/Button";

import styles from "./PageNotFound.module.scss";

export default function PageNotFound() {
    const navigate = useNavigate();

    const onReturnClick = () => {
        navigate("/");
    };

    return (
        <div className={styles.page_wrapper}>
            <img src="/icons/stocodi-letter.png" alt="" />
            <h1>404 Not Found</h1>
            <p>페이지를 찾을 수 없습니다</p>

            <Button type="primary-filled" width="min(400px, 80%)" height="50px" onClick={onReturnClick}>
                홈으로 돌아가기
            </Button>
        </div>
    );
}
