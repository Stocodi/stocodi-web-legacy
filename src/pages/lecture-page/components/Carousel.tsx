import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonCircle } from "../../../components/forms/Button";

import { ICarouselList } from "../../../constants/Carousel";

import styles from "./Carousel.module.scss";

interface Props {
    carouselList: ICarouselList[];
}

export const Carousel = ({ carouselList }: Props) => {
    const navigate = useNavigate();

    const [currIndex, setCurrIndex] = useState(1);
    const [currList, setCurrList] = useState<ICarouselList[]>([]);

    const carouselRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            handleSwipe(1);
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    });

    useEffect(() => {
        if (carouselList.length !== 0) {
            const startData = carouselList[0];
            const endData = carouselList[carouselList.length - 1];
            const newList = [endData, ...carouselList, startData];

            setCurrList(newList);
        }
    }, [carouselList]);

    useEffect(() => {
        if (carouselRef.current !== null) {
            carouselRef.current.style.transform = `translateX(-${currIndex}00%)`;
        }
    }, [currIndex]);

    const moveToNthSlide = (index: number) => {
        setTimeout(() => {
            setCurrIndex(index);
            if (carouselRef.current !== null) {
                carouselRef.current.style.transition = "";
            }
        }, 500);
    };

    const handleSwipe = (direction: number) => {
        const newIndex = currIndex + direction;

        if (newIndex === carouselList.length + 1) {
            moveToNthSlide(1);
        } else if (newIndex === 0) {
            moveToNthSlide(carouselList.length);
        }

        setCurrIndex((prev) => prev + direction);
        if (carouselRef.current !== null) {
            carouselRef.current.style.transition = "all 0.5s ease-in-out";
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.carouselWrapper}>
                <ButtonCircle type="left" className={styles.swipeLeft} onClick={() => handleSwipe(-1)}></ButtonCircle>
                <ButtonCircle type="right" className={styles.swipeRight} onClick={() => handleSwipe(1)}></ButtonCircle>
                <ul className={styles.carousel} ref={carouselRef}>
                    {currList?.map((element, idx) => {
                        const key = `${element.imgSrc}-${idx}`;
                        return (
                            <li key={key} className={styles.carouselItem} onClick={() => navigate(element.link)}>
                                <img src={element.imgSrc} alt="carousel-img" />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
