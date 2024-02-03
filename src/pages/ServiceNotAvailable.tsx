import { useNavigate } from "react-router-dom";
import { Button } from "../components/forms/Button";
import styles from "./ServiceNotAvailable.module.scss";

export default function ServiceNotAvailablePage() {
    const navigate = useNavigate();

    const onReturnClick = () => {
        navigate("/");
    };

    return (
        <div className={styles.page_wrapper}>
            <img src="/icons/stocodi-letter.png" alt="" />
            <h1>Service Not Available</h1>
            <p>서비스 준비중입니다</p>

            <Button type="primary-filled" width="min(400px, 80%)" height="50px" onClick={onReturnClick}>
                홈으로 돌아가기
            </Button>
        </div>
    );
}
