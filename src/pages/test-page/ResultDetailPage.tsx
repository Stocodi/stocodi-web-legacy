import domtoimage from "dom-to-image";
import { Link, useNavigate } from "react-router-dom";

import { LabelContainer } from "../../interfaces/display/LabelContainer";
import { Button } from "../../interfaces/forms/Button";
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

import { GetResult, GetResultCommentIndex, ResultComment } from "../../constants/Result";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ResultDetailPage() {
    const { score } = useSelector((state: RootState) => state.UserQuestion);
    const result = GetResult(score.reduce((prev, next) => prev + next) / 6);

    const navigate = useNavigate();

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
                <Button
                    type="primary-filled"
                    className={styles.btn_wrong_ans}
                    width="min(100%, 486px)"
                    height="50px"
                    onClick={() => navigate("/test/result/comment")}
                >
                    틀린문제 보러가기
                </Button>

                <LabelContainer label="해설" width="min(486px, 100%)">
                    <p>
                        <span style={{ fontWeight: "bold" }}>경제기초 : </span>
                        <span>{ResultComment.comment_basic[GetResultCommentIndex(score[0])]}</span>
                    </p>
                    <p>
                        <span style={{ fontWeight: "bold" }}>은행상품 : </span>
                        <span>{ResultComment.comment_bank[GetResultCommentIndex(score[1])]}</span>
                    </p>
                    <p>
                        <span style={{ fontWeight: "bold" }}>카드와 신용 : </span>
                        <span>{ResultComment.comment_credit[GetResultCommentIndex(score[2])]}</span>
                    </p>
                    <p>
                        <span style={{ fontWeight: "bold" }}>세금 : </span>
                        <span>{ResultComment.comment_tax[GetResultCommentIndex(score[3])]}</span>
                    </p>
                    <p>
                        <span style={{ fontWeight: "bold" }}>보험 : </span>
                        <span>{ResultComment.comment_insurance[GetResultCommentIndex(score[4])]}</span>
                    </p>
                    <p>
                        <span style={{ fontWeight: "bold" }}>투자 : </span>
                        <span>{ResultComment.comment_investment[GetResultCommentIndex(score[5])]}</span>
                    </p>
                </LabelContainer>

                <Link to="/test/result" style={{ textAlign: "left", margin: "20px auto" }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span style={{ margin: "0px 10px" }}>뒤로 가기</span>
                </Link>

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
                        domtoimage.toJpeg(document.querySelector(`.${resultPageStyle.result_page}`) as Node, { quality: 1 }).then(function (dataUrl) {
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
