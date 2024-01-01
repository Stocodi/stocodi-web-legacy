import { Button } from "../../interfaces/forms/Button";
import styles from "./TestPage.module.scss";

export default function TestPage() {
    return (
        <div className={styles.page_wrapper}>
            <img src="/img/test-background.svg" alt="" />
            <div className={styles.banner}>
                <h2>2023 당신의 올해 금융점수는 ?</h2>
                <h1>금융역량테스트</h1>

                <div className={styles.grid}>
                    <div>나</div>
                    <div>의</div>
                    <div className={styles.img_grid}>
                        <img src="/icons/stocodi.svg" alt="" />
                    </div>
                    <div>금</div>
                    <div className={styles.img_grid}>
                        <img src="/icons/stocodi.svg" alt="" />
                    </div>
                    <div>융</div>
                    <div>점</div>
                    <div>수</div>
                    <div>는</div>
                </div>
            </div>
            <Button type="primary-stroke" width="250px" height="50px">
                <span>테스트 시작하기</span>
            </Button>
        </div>
    );
}
