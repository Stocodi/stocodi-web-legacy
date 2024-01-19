import { Link } from "react-router-dom";

import { LabelContainer } from "../../interfaces/display/LabelContainer";
import { AvatarSection } from "../../components/test-page/AvatarSection";
import { ShareSection, ShareItem } from "../../components/test-page/ShareSection";
import { ProsConsContainer } from "../../components/test-page/ProsConsContainer";
import { LectureRedirectCard } from "../../components/test-page/LectureRedirectCard";

import resultPageStyle from "./ResultPage.module.scss";
import styles from "./ResultDetailPage.module.scss";

import shareImg from "@/assets/share-image.png";
import shareKakao from "@/assets/share-kakao.png";
import shareIG from "@/assets/share-ig.png";
import shareFb from "@/assets/share-fb.png";
import shareLink from "@/assets/share-link.png";

import lectureImg from "@/assets/lecture.png";

export default function ResultDetailPage() {
    return (
        <div className={resultPageStyle.result_page}>
            <AvatarSection
                avatarImg="/img/test-thumbnail.webp"
                phrase="잭팟을 터트렸다고 말하는 사람들을 부러워해선 안된다"
                author="워렌 버핏, 버크셔 해서웨이 CEO"
            />

            <div className={resultPageStyle.result_section}>
                <LabelContainer label="해설" width="min(486px, 100%)">
                    경제기초: 경제에 대한 기본 개념을 잘 이해하고 있습니다. 추가적인 학습과 실무 경험을 통해 더욱 향상될 수 있습니다. 인플레이션과
                    빈부격차에 대한 개념을 더 깊이 파고들면 좋을 것입니다. 은행상품: 은행상품에 대한 기본적인 이해가 있습니다. 예금자 보호법과
                    은행상품 간의 차이를 명확히 이해하는 것이 중요합니다. 카드와 신용: 카드와 신용에 대한 높은 수준의 이해를 보여주고 있습니다. 몇몇
                    어려운 개념도 이해하고 있을 것으로 예상됩니다. 카드와 신용을 효과적으로 관리하는 방법에 대한 전문 지식을 보유하고 있습니다.
                    세금:세금에 대한 일부 기본 개념을 이해하고 있지만, 혼동이 있을 수 있습니다. 은행 예금과 소득에 대한 세금 부과에 대한 이해를 높이는
                    것이 중요합니다. 보험: 보험에 대한 일부 기본 개념을 이해하고 있지만, 혼동이 있을 수 있습니다. 주보험과 특약에 대한 차이를 명확히
                    이해하는 것이 중요합니다. 투자: 투자에 대한 기본적인 이해가 있습니다. 그러나 몇몇 부분에서는 미흡할 수 있습니다. ETF와 레버리지
                    상품에 대한 내용을 더 자세히 이해할 필요가 있습니다.
                </LabelContainer>

                <div className={styles.pros_cons_container}>
                    <div className={styles.pros_cons_item}>
                        <ProsConsContainer type="pros" width="65%" title="카드와 신용" />
                        <LectureRedirectCard width="30%" imgSrc={lectureImg} label="보다 전문적인 지식을 얻고 싶다면?" />
                    </div>

                    <div className={styles.pros_cons_item}>
                        <ProsConsContainer type="cons" width="65%" title="보험" />
                        <LectureRedirectCard width="30%" imgSrc={lectureImg} label="약한 분야를 더 배우고 싶다면?" />
                    </div>
                </div>
            </div>

            <ShareSection>
                <ShareItem icon={shareImg} label="이미지 저장" onClick={() => {}} />
                <ShareItem icon={shareKakao} label="카카오톡" onClick={() => {}} />
                <ShareItem icon={shareIG} label="인스타그램" onClick={() => {}} />
                <ShareItem icon={shareFb} label="페이스북" onClick={() => {}} />
                <ShareItem icon={shareLink} label="링크 복사" onClick={() => {}} />
            </ShareSection>
        </div>
    );
}
