import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { ButtonCircle } from "../../../components/forms/Button";

import styles from "./LectureSection.module.scss";
import { useRef } from "react";

export interface ILectureSection {
    title: string;
    children: React.ReactNode;
}

export const LectureSection: React.FC<ILectureSection> = ({ title, children }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const onLeftBtnClick = () => {
        sectionRef.current?.scrollTo({
            left: sectionRef.current?.scrollLeft - 600,
            behavior: "smooth",
        });
    };
    const onRightBtnClick = () => {
        sectionRef.current?.scrollTo({
            left: sectionRef.current?.scrollLeft + 600,
            behavior: "smooth",
        });
        console.log(sectionRef.current?.scrollLeft);
    };

    return (
        <div className={styles.lecture_section_wrapper}>
            <div className={styles.section_title}>
                <span>{title}</span>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <div ref={sectionRef} className={styles.section_container}>
                {children}
            </div>

            <ButtonCircle type="left" onClick={onLeftBtnClick} />
            <ButtonCircle type="right" onClick={onRightBtnClick} />
        </div>
    );
};
