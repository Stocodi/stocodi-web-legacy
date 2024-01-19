import { useNavigate } from "react-router-dom";

import { Button } from "../../interfaces/forms/Button";
import styles from "./TestPage.module.scss";
import { PostRequest } from "../../api/Request";

export default function TestPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.page_wrapper}>
            <img className={styles.page_bg} src="/img/test-background.svg" alt="" />
            <div className={styles.banner}>
                <h2>2023 당신의 올해 금융점수는 ?</h2>
                <h1>금융역량테스트</h1>

                <div className={styles.grid}>
                    <div>
                        <span>나</span>
                    </div>
                    <div>
                        <span>의</span>
                    </div>
                    <div className={styles.img_grid}>
                        <img src="/icons/dollar.png" alt="" />
                    </div>
                    <div>
                        <span>금</span>
                    </div>
                    <div className={styles.img_grid}>
                        <img src="/icons/stocodi.svg" alt="" />
                    </div>
                    <div>
                        <span>융</span>
                    </div>
                    <div>
                        <span>점</span>
                    </div>
                    <div>
                        <span>수</span>
                    </div>
                    <div>
                        <span>는</span>
                    </div>
                </div>
            </div>

            <Button
                type="primary-stroke"
                width="250px"
                height="50px"
                onClick={() => {
                    PostRequest("/api/v1/statistics/start", {});
                    navigate("/test/question");
                }}
            >
                <span>테스트 시작하기</span>
            </Button>
        </div>
    );
}
