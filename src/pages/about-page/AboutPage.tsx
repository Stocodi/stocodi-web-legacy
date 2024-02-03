// 랜딩페이지
import { useObserver } from "../../hooks/useObserver";

import "./AboutPage.scss";

import BackgroundSection from "./components/BackgroundSection";
import HeadingSection from "./components/HeadingSection";
import ContentSection from "./components/ContentSection";
import FooterSection from "./components/FooterSection";
import { FeatureExperiment, FeaturePortfolio, FeaturePractice, FeatureLecture } from "./components/FeatureSection";

export default function AboutPage() {
    // 스크롤 애니메이션
    useObserver(".landing-page__title", 0, { before: "animate-fromleft-before", after: "animate-fromleft-after" }, { duration: "1s", delay: "0s" });

    useObserver(".landing-page__service-item", 0, { before: "animate-rise-before", after: "animate-rise-after" }, { duration: "1s", delay: "0s" });

    useObserver(".landing-page__mockup-item", 0, { before: "animate-rise-before", after: "animate-rise-after" }, { duration: "1s", delay: "0s" });

    return (
        <div className="landing-page">
            <BackgroundSection />

            <HeadingSection />

            <div className="landing-page__video-container">
                <img src={"/home/hero-video-thumbnail.png"} alt="" />
                <h1>우리가 원했던 모의 투자</h1>
            </div>

            <FeatureExperiment />
            <FeaturePortfolio />
            <FeaturePractice />
            <FeatureLecture />

            <h1 style={{ display: "block", margin: "400px 0px", textAlign: "center" }}>
                이제, <span style={{ color: "#00a969" }}>스토코디</span>와 함께 모의투자의 세계로 떠나볼까요?
            </h1>

            <ContentSection
                title="기초"
                subtitle1="금융지식이 부족한 나"
                subtitle2="숏폼교육으로 해결!"
                description="짧은 시간 동안 핵심 내용을 간결하게 전달하는 숏폼을 통해 금융지식을 습득해요 이를 기반으로 투자에 대한 판단력을 키워봐요"
                imgSrc="/home/landing-content1.png"
            />

            <ContentSection
                title="흥미"
                subtitle1="사람들과 공유하며"
                subtitle2="투자에 대한 흥미를"
                description="친구들과 함께 투자에 대한 관심을 공유하며 서로의 전략을 배워요. 그룹에서 토론과 정보 공유를 통해 다양한 시각을 얻을 수 있어요. 친구들과 함께 그룹을 만들어 경쟁하며 성장해 나가세요"
                imgSrc="/home/landing-content2.png"
            />

            <ContentSection
                title="실습"
                subtitle1="배운 내용을 적용한"
                subtitle2="실전과 같은 환경제공"
                description="가상의 자본으로 실제 주식 시장 데이터를 활용하여 포트폴리오를 구성하고 거래를해요 실제 투자를 진행하는 것과 유사하게 다양한 상황에서 전략을 짜고 포트폴리오의 성과를 제공하며 성장해 나가는 경험을 제공해드려요"
                imgSrc="/home/landing-content3.webp"
            />

            <div className="landing-page__feature-title-wrapper">
                <div className="landing-page__feature-title-container">
                    <div className="landing-page__feature-title">
                        <h1>
                            <span>투자에 대한 이론과 실습 소통까지</span>
                            <br />
                            <span>스토코디 한 곳에서</span>
                        </h1>
                    </div>
                    <div className="landing-page__feature-subtitle">
                        <p>
                            <span>어려개의 앱을 설치할 필요가 없어요</span>
                            <br />
                            <span>투자에 대한 공부와 실전같은 모의투자 그리고 </span>
                            <br />
                            <span>유저들간의 소통까지 이 모든것을 스토코디와</span>
                            <br />
                            <span>함께 경험해 보세요</span>
                        </p>
                    </div>
                </div>
            </div>

            <FooterSection />
        </div>
    );
}
