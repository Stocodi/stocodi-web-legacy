import { useObserver } from "../../hooks/useObserver";

import "./ContentSection.scss";

export interface IContentSection {
    title: string;
    subtitle1: string;
    subtitle2: string;
    description: string;
    imgSrc: string;
}

export default function ContentSection({ title, subtitle1, subtitle2, description, imgSrc }: IContentSection) {
    useObserver(
        ".landing-page__content:nth-child(0)",
        0,
        { before: "animate-fromleft-before", after: "animate-fromleft-after" },
        { duration: "1s", delay: "0s" },
    );

    return (
        <div className="landing-page__content-wrapper">
            <div className="landing-page__content-container">
                <div className="landing-page__content-item">
                    <div className="landing-page__title">
                        <h3>{title}</h3>
                        <h1>{subtitle1}</h1>
                        <h1>{subtitle2}</h1>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="landing-page__content-item">
                    <div className="landing-page__content">
                        <img src={imgSrc} alt="landing-content1" />
                    </div>
                </div>
            </div>
        </div>
    );
}
