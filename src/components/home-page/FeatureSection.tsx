import { useObserver } from "../../hooks/useObserver";
import "./FeatureSection.scss";

export const FeatureExperiment = () => {
    return (
        <>
            <div className="landing-page__title">
                <h3>투자실험</h3>
                <h1>자산을 한 눈에 체크하고</h1>
                <h1>쉽고 부담없이 투자해요</h1>
            </div>
            <div className="landing-page__mockup-wrapper">
                <div className="landing-page__mockup-container">
                    <div className="landing-page__mockup-item">
                        <img src={"/home/hero-mockup-left.png"} />
                    </div>

                    <div className="landing-page__mockup-item">
                        <img src={"/home/hero-mockup-right.png"} />
                        <p>
                            <span>투자내역과 수익률을 한 번에</span>
                            <br />
                            <span>체크할 수 있어요</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export const FeaturePortfolio = () => {
    return (
        <>
            <div className="landing-page__title">
                <h1>여래개의 포트폴리오로</h1>
                <h1>자신에 맞는 전략을 찾아보세요</h1>
            </div>

            <div className="landing-page__mockup-wrapper">
                <div className="landing-page__mockup-container">
                    <div className="landing-page__mockup-portfolio">
                        <img src={"/home/portfolio-mockup.png"} />
                    </div>
                </div>
            </div>
        </>
    );
};

export const FeaturePractice = () => {
    return (
        <>
            <div className="landing-page__title">
                <h1>연습도 실전처럼</h1>
                <h1>실시간으로 반영 되는</h1>
                <h1>주가를 체크하세요</h1>
            </div>

            <div className="landing-page__service-wrapper">
                <div className="landing-page__service-container">
                    <div className="landing-page__service-item">
                        <div className="landing-page__service-text">
                            <h4>관심종목</h4>

                            <h2>
                                요즘 핫한 관심사는?
                                <br />
                                유저들의 관심종목 실시간 체크!
                            </h2>

                            <p>관심 종목의 실시간 가격 변동을 보며 주식 시장의 흐름과 경향을 실시간으로 파악할 수 있어요 이를 통해 투자 결정을 더 명확하게 내릴 수 있죠</p>
                        </div>
                    </div>

                    <div className="landing-page__service-item">
                        <img src={"/home/landing-service-demo1.png"} />
                    </div>
                </div>

                <div className="landing-page__service-container">
                    <div className="landing-page__service-item">
                        <img src={"/home/landing-service-demo2.png"} />
                    </div>

                    <div className="landing-page__service-item">
                        <div className="landing-page__service-text">
                            <h4>관심종목</h4>
                            <h2>
                                얼마나 올랐을까?
                                <br />
                                보유종목 실시간 등락체크!
                            </h2>

                            <p>보유종목의 실시간 등락 변동을 손쉽게 파악하고 주식 시장의 변화에 신속하게 대응해요</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const FeatureLecture = () => {
    useObserver(".mockup-ll", 0, { before: "animate-mockup-before", after: "animate-mockupll-after" }, { duration: "1s", delay: "0s" });
    useObserver(".mockup-rr", 0, { before: "animate-mockup-before", after: "animate-mockuprr-after" }, { duration: "1s", delay: "0s" });
    useObserver(".mockup-l", 0, { before: "animate-mockup-before", after: "animate-mockupl-after" }, { duration: "1s", delay: "0s" });
    useObserver(".mockup-r", 0, { before: "animate-mockup-before", after: "animate-mockupr-after" }, { duration: "1s", delay: "0s" });

    return (
        <>
            <div className="landing-page__title">
                <h3>투자강의</h3>
                <h1>최신강의부터 인기강의까지</h1>
                <h1>투자에 대한 기초지식</h1>

                <p>
                    자신에게 맞는 강의를 골라 들어요
                    <br />
                    스크랩은 물론이고 댓글로 사람들과 소통해요
                </p>
            </div>

            <div className="landing-page__mockup-group-wrapper">
                <div className="landing-page__mockup-group-container">
                    <img className="mockup-ll" src={"/home/landing-mockup-lecture2.png"} alt="" />
                </div>
                <div className="landing-page__mockup-group-container">
                    <img className="mockup-rr" src={"/home/landing-mockup-lecture2.png"} alt="" />
                </div>
                <div className="landing-page__mockup-group-container">
                    <img className="mockup-l" src={"/home/landing-mockup-lecture2.png"} alt="" />
                </div>
                <div className="landing-page__mockup-group-container">
                    <img className="mockup-r" src={"/home/landing-mockup-lecture2.png"} alt="" />
                </div>
                <div className="landing-page__mockup-group-container">
                    <img className="mockup-m" src={"/home/landing-mockup-lecture1.png"} alt="" />
                </div>
            </div>
        </>
    );
};
