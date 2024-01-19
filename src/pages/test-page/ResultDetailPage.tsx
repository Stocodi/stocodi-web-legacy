import domtoimage from "dom-to-image";

import { LabelContainer } from "../../interfaces/display/LabelContainer";
import { AvatarSection } from "../../components/test-page/AvatarSection";
import { ShareContainer, ShareItem } from "../../components/test-page/ShareContainer";
import { ProsConsContainer } from "../../components/test-page/ProsConsContainer";
import { LectureRedirectCard, LectureRedirectLink } from "../../components/test-page/LectureRedirectCard";

import resultPageStyle from "./ResultPage.module.scss";
import styles from "./ResultDetailPage.module.scss";

import shareImg from "@/assets/share-image.png";
import shareKakao from "@/assets/share-kakao.png";
import shareIG from "@/assets/share-ig.png";
import shareFb from "@/assets/share-fb.png";
import shareLink from "@/assets/share-link.png";

import lectureImg from "@/assets/lecture.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { shareKakaoLink } from "../../utils/ShareKakaoLink";

import { GetResult } from "../../constants/Result";

export default function ResultDetailPage() {
    const { score } = useSelector((state: RootState) => state.UserQuestion);
    const result = GetResult(score.reduce((prev, next) => prev + next) / 6);

    const GetCategory = (index: number) => {
        switch (index) {
            case 0:
                return "경제기초";
            case 1:
                return "은행상품";
            case 2:
                return "카드와 신용";
            case 3:
                return "세금";
            case 4:
                return "보험";
            case 5:
                return "투자";
            default:
                return "";
        }
    };

    return (
        <div className={resultPageStyle.result_page}>
            <AvatarSection avatarImg={result?.img as string} phrase={result?.title as string} author={result?.author as string} />

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
                        <ProsConsContainer type="pros" width="65%" title={GetCategory(score.indexOf(Math.max(...score)))} />
                        <LectureRedirectLink label="보다 전문적인 지식을 얻고 싶다면?" link="/" />
                        <LectureRedirectCard width="30%" imgSrc={lectureImg} label="보다 전문적인 지식을 얻고 싶다면?" />
                    </div>

                    <div className={styles.pros_cons_item}>
                        <ProsConsContainer type="cons" width="65%" title={GetCategory(score.indexOf(Math.min(...score)))} />
                        <LectureRedirectLink label="약한 분야를 더 배우고 싶다면?" link="/" />
                        <LectureRedirectCard width="30%" imgSrc={lectureImg} label="약한 분야를 더 배우고 싶다면?" />
                    </div>
                </div>
            </div>

            <ShareContainer>
                <ShareItem
                    icon={shareImg}
                    label="이미지 저장"
                    onClick={() => {
                        // eslint-disable-next-line, @typescript-eslint/no-unsafe-call
                        domtoimage.toJpeg(document.querySelector(`.${styles.result_page}`) as Node, { quality: 0.95 }).then(function (dataUrl) {
                            const link = document.createElement("a");
                            link.download = "금융역량테스트 결과.jpeg";

                            link.href = dataUrl;
                            link.click();
                        });
                    }}
                />
                <ShareItem
                    icon={shareKakao}
                    label="카카오톡"
                    onClick={() => {
                        console.log("click");
                        shareKakaoLink("공유하기", "http://localhost:3000/test");
                    }}
                />
                <ShareItem icon={shareIG} label="인스타그램" onClick={() => alert("서비스 준비중입니다")} />
                <ShareItem icon={shareFb} label="페이스북" onClick={() => alert("서비스 준비중입니다")} />
                <ShareItem
                    icon={shareLink}
                    label="링크 복사"
                    onClick={() => {
                        window.navigator.clipboard.writeText("https://stocodi.com/test").then(() => {
                            alert("링크가 클립보드에 복사되었습니다");
                        });
                    }}
                />
            </ShareContainer>
        </div>
    );
}
