import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AvatarSection } from "../../components/test-page/AvatarSection";
import { ResultGrid, ResultGridItem, ResultSummary } from "../../components/test-page/ResultSummary";
import { ShareItem, ShareSection } from "../../components/test-page/ShareSection";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ResultPage.module.scss";

import resultIcon1 from "@/assets/result-icon-1.png";
import resultIcon2 from "@/assets/result-icon-2.png";
import resultIcon3 from "@/assets/result-icon-3.png";
import resultIcon4 from "@/assets/result-icon-4.png";
import resultIcon5 from "@/assets/result-icon-5.png";
import resultIcon6 from "@/assets/result-icon-6.png";

import shareImg from "@/assets/share-image.png";
import shareKakao from "@/assets/share-kakao.png";
import shareIG from "@/assets/share-ig.png";
import shareFb from "@/assets/share-fb.png";
import shareLink from "@/assets/share-link.png";

export interface IScore {
    type_basic: number;
    type_bank: number;
    type_credit: number;
    type_tax: number;
    type_insurance: number;
    type_investment: number;
}

export default function ResultPage() {
    const [score, setScore] = useState<IScore>({
        type_basic: 0,
        type_bank: 0,
        type_credit: 0,
        type_tax: 0,
        type_insurance: 0,
        type_investment: 0,
    });

    useEffect(() => {
        // 문제 채점 로직
        setScore({
            type_basic: 0,
            type_bank: 0,
            type_credit: 0,
            type_tax: 0,
            type_insurance: 0,
            type_investment: 0,
        });
    }, []);

    return (
        <div className={styles.result_page}>
            <AvatarSection
                avatarImg="/img/test-thumbnail.webp"
                phrase="잭팟을 터트렸다고 말하는 사람들을 부러워해선 안된다"
                author="워렌 버핏, 버크셔 해서웨이 CEO"
            />

            <div className={styles.result_section}>
                <ResultSummary score={83.4} />

                <ResultGrid>
                    <ResultGridItem category="경제기초" score={score.type_basic} icon={resultIcon1} />
                    <ResultGridItem category="은행상품" score={score.type_bank} icon={resultIcon2} />
                    <ResultGridItem category="카드와 신용" score={score.type_credit} icon={resultIcon3} />
                    <ResultGridItem category="세금" score={score.type_tax} icon={resultIcon4} />
                    <ResultGridItem category="보험" score={score.type_insurance} icon={resultIcon5} />
                    <ResultGridItem category="투자" score={score.type_investment} icon={resultIcon6} />
                </ResultGrid>

                <Link to="/test/result/detail">
                    <span>자세한 해설 보러가기</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>

            <ShareSection>
                <ShareItem icon={shareImg} label="이미지 저장" />
                <ShareItem icon={shareKakao} label="카카오톡" />
                <ShareItem icon={shareIG} label="인스타그램" />
                <ShareItem icon={shareFb} label="페이스북" />
                <ShareItem icon={shareLink} label="링크 복사" />
            </ShareSection>
        </div>
    );
}
