export default function FooterSection() {
    return (
        <>
            <div className="landing-page__feature-icon-container">
                <div className="landing-page__feature-icon-item">
                    <img src={"/home/landing-icon-study.svg"} alt="" />
                    <h1>Study</h1>
                    <p>자신에게 맞는 강의를 찾아 공부하며 금융에 대한 지식을 넓히세요!</p>
                </div>
                <div className="landing-page__feature-icon-item">
                    <img src={"/home/landing-icon-coordinate.svg"} alt="" />
                    <h1>Coordinate</h1>
                    <p>자신에게 맞는 투자스타일을 찾아 자신의 미래를 코디하세요!</p>
                </div>
                <div className="landing-page__feature-icon-item">
                    <img src={"/home/landing-icon-communicate.svg"} alt="" />
                    <h1>Communicate</h1>
                    <p>유저들간의 소통을 통해 친해지고 유용한 정보를 공유해봐요!</p>
                </div>
            </div>

            <img className="landing-page__feature-group" src={"/home/landing-icon-group.svg"} alt="" />

            <div className="landing-page__footer">
                <img src={"/home/landing-icon.svg"} alt="" />
                <p>
                    <span>스토코디는 유저와 함께 투자의 기초에 대해 소통합니다.</span>
                    <br />
                    <span>스토코디와 함께 건강한 투자문화를 만들어가요!</span>
                </p>
            </div>
        </>
    );
}
