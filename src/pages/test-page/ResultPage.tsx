import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import domtoimage from "dom-to-image";

import { AvatarSection } from "./components/AvatarSection";
import { ResultGrid, ResultGridItem, ResultSummary } from "./components/ResultSummary";
import { ShareContainer, ShareItem } from "./components/ShareContainer";

import resultIcon1 from "@/assets/result-icon-1.png";
import resultIcon2 from "@/assets/result-icon-2.png";
import resultIcon3 from "@/assets/result-icon-3.png";
import resultIcon4 from "@/assets/result-icon-4.png";
import resultIcon5 from "@/assets/result-icon-5.png";
import resultIcon6 from "@/assets/result-icon-6.png";
import shareImg from "@/assets/share-image.png";
import shareKakao from "@/assets/share-kakao.png";
import shareLink from "@/assets/share-link.png";

import { GetResult } from "../../constants/Result";
import { shareKakaoLink } from "../../utils/ShareKakaoLink";

import { testService } from "../../api/services/test.service";

import { RootState } from "../../store/store";

import styles from "./ResultPage.module.scss";

// import shareIG from "@/assets/share-ig.png";
// import shareFb from "@/assets/share-fb.png";

export default function ResultPage() {
    const { score } = useSelector((state: RootState) => state.UserQuestion);
    const result = GetResult(score.reduce((prev, next) => prev + next) / 6);

    useEffect(() => {
        testService.endTest();
    });

    return (
        <div className={styles.result_page}>
            <AvatarSection avatarImg={result?.img as string} phrase={result?.title as string} author={result?.author as string} />

            <div className={styles.result_section}>
                <ResultSummary score={(score.reduce((prev, next) => prev + next) / 6).toFixed(1)} />

                <ResultGrid>
                    <ResultGridItem category="경제기초" score={score[0]} icon={resultIcon1} />
                    <ResultGridItem category="은행상품" score={score[1]} icon={resultIcon2} />
                    <ResultGridItem category="카드와 신용" score={score[2]} icon={resultIcon3} />
                    <ResultGridItem category="세금" score={score[3]} icon={resultIcon4} />
                    <ResultGridItem category="보험" score={score[4]} icon={resultIcon5} />
                    <ResultGridItem category="투자" score={score[5]} icon={resultIcon6} />
                </ResultGrid>

                <Link to="/test/result/detail">
                    <span>자세한 해설 보러가기</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>

            <ShareContainer>
                <ShareItem
                    icon={shareImg}
                    label="이미지 저장"
                    onClick={() => {
                        domtoimage.toJpeg(document.querySelector(`.${styles.result_page}`) as Node, { quality: 1 }).then(function (dataUrl) {
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
                        shareKakaoLink("금융역량테스트", "금융역량테스트 바로가기", "/img/stocodi-thumbnail.png", "http://stocodi.com/test");
                    }}
                />
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
