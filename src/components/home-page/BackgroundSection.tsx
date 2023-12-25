import "./BackgroundSection.scss";

export default function BackgroundSection() {
    return (
        <div className="landing-page__image-container">
            <img className="landing-page__image-brace-stroke-top" src={"/home/brace-stroke.svg"} alt="" />
            <img className="landing-page__image-brace-stroke-bottom" src={"/home/brace-stroke.svg"} alt="" />
            <img className="landing-page__image-brace-right" src={"/home/braceR.svg"} />
            <img className="landing-page__image-mockup" src={"/home/hero-mockup-desktop.png"} />
            <img className="landing-page__image-brace-right-bottom" src={"/home/braceL.svg"} />
            <img className="landing-page__image-mockup-phone-bottom" src={"/home/hero-mockup-phone.png"} />
        </div>
    );
}
