import { useLayoutEffect } from "react";

export const useObserver = (selector: string, threshold: number, className: { before: string; after: string }, transition: { duration: string; delay: string }) => {
    const thresholds: number[] = [];
    for (let t = 0; t <= 1.0; t += 0.01) thresholds.push(t);

    useLayoutEffect(() => {
        const elements = document.querySelectorAll(selector);

        const observers: IntersectionObserver[] = [];
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: thresholds,
        };

        for (const element of elements) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.intersectionRatio * 100 > threshold) {
                            // onEnter
                            if (element.classList.contains(className.before)) {
                                element.classList.remove(className.before);
                                element.classList.add(className.after);
                            }
                        }
                    } else {
                        // onLeave
                        if (element.classList.contains(className.after)) {
                            element.classList.remove(className.after);
                            element.classList.add(className.before);
                        }
                    }
                });
            }, observerOptions);

            // 초기 애니메이션 className 부착
            if (!element.classList.contains(className.before)) {
                element.classList.add(className.before);
            }

            // CSS transition 속성 추가

            element.style.transitionProperty = "all";
            element.style.transitionDuration = transition.duration;
            element.style.transitionDelay = transition.delay;
            element.style.transitionTimingFunction = "ease-in-out";

            observer.observe(element);
            observers.push(observer);
        }

        return () => {
            for (let idx = 0; idx < elements.length; idx++) {
                observers[idx].unobserve(elements[idx]);
            }
        };
    }, [selector, threshold, className]);
};
