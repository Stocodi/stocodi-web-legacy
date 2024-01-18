import { AvatarSection } from "../../components/test-page/AvatarSection";
import { ResultGrid, ResultGridItem, ResultSummary } from "../../components/test-page/ResultSummary";
import styles from "./ResultPage.module.scss";

import resultIcon1 from "@/assets/result-icon-1.png";
import resultIcon2 from "@/assets/result-icon-2.png";
import resultIcon3 from "@/assets/result-icon-3.png";
import resultIcon4 from "@/assets/result-icon-4.png";
import resultIcon5 from "@/assets/result-icon-5.png";
import resultIcon6 from "@/assets/result-icon-6.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ResultPage() {
    return (
        <div className={styles.result_page}>
            <AvatarSection
                avatarImg="/img/test-thumbnail.webp"
                phrase="잭팟을 터트렸다고 말하는 사람들을 부러워해선 안된다"
                author="워렌 버핏, 버크셔 해서웨이 CEO"
            />
            <ResultSummary score={83.4} />

            <ResultGrid>
                <ResultGridItem category="경제기초" score={60} icon={resultIcon1} />
                <ResultGridItem category="은행상품" score={60} icon={resultIcon2} />
                <ResultGridItem category="카드와 신용" score={60} icon={resultIcon3} />
                <ResultGridItem category="세금" score={60} icon={resultIcon4} />
                <ResultGridItem category="보험" score={60} icon={resultIcon5} />
                <ResultGridItem category="투자" score={60} icon={resultIcon6} />
            </ResultGrid>

            <Link to="/test/result/detail">
                <span>자세한 해설 보러가기</span>
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>
    );
}
