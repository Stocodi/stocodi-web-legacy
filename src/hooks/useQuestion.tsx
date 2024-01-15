import { useState, useEffect, useRef } from "react";

/**
 * 금융역량테스트 정답 채점 Hook
 * @param answer 정답 "O" 또는 "X"
 * @param questionOptClassName QuestionOption 의 className Selector
 * @returns
 */
export const useQuestion = (question: string, answer: string, questionOptClassName: string) => {
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isCommentVisible, setIsCommentVisible] = useState<boolean>(false);

    const answerElementRef = useRef<HTMLElement | null>(null);
    const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => {
        setIsCorrect(null);
        setIsCommentVisible(false);

        const onChooseOptions = (e: Event) => {
            const target = e.target as HTMLElement;
            setIsCorrect(target.innerHTML === answer);

            timeout.current = setTimeout(() => {
                setIsCommentVisible(true);
                setIsCorrect(null);

                if (answerElementRef.current) {
                    answerElementRef.current.style.backgroundColor = `#0ECB81`;
                }
            }, 2000);
        };

        const $options = document.querySelectorAll(`.${questionOptClassName}`);

        for (let index = 0; index < $options.length; index++) {
            $options[index].addEventListener("click", onChooseOptions);

            // 정답 HTML Element 저장
            if ($options[index].innerHTML === answer && answerElementRef) {
                answerElementRef.current = $options[index] as HTMLElement;
                answerElementRef.current.style.transition = `background-color 1s ease-in-out`;
            }
        }

        return () => {
            for (let index = 0; index < $options.length; index++) {
                $options[index].removeEventListener("click", onChooseOptions);
            }

            if (timeout.current !== undefined) {
                clearTimeout(timeout.current);
            }

            if (answerElementRef.current) {
                answerElementRef.current.style.backgroundColor = `#efefef`;
                answerElementRef.current.style.transition = `none`;
                answerElementRef.current = null;
            }
        };
    }, [question, answer, questionOptClassName]);

    return { isCorrect, isCommentVisible };
};
