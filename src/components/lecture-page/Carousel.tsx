import styles from "./Carousel.module.scss";
import { useEffect, useRef, useState } from "react";
import { ButtonCircle } from "../../interfaces/forms/Button";
interface Props {
    carouselList: string[];
}

export const Carousel = ({ carouselList }: Props) => {
    const [currIndex, setCurrIndex] = useState(1);
    const [currList, setCurrList] = useState<string[]>();

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
                    {currList?.map((image, idx) => {
                        const key = `${image}-${idx}`;
                        return (
                            <li key={key} className={styles.carouselItem}>
                                <img src={image} alt="carousel-img" />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
