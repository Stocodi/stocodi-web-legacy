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
    const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    // useEffect(() => console.log("[State Changed] : isCorrect Changed"), [isCorrect]);
    // useEffect(() => console.log("[State Changed] : isCommentVisible Changed"), [isCommentVisible]);

    useEffect(() => {
        setIsCorrect(null);
        setIsCommentVisible(false);

        const onChooseOptions = (e: Event) => {
            setIsCorrect(e.target?.innerHTML === answer);
            timeout.current = setTimeout(() => {
                setIsCommentVisible(true);
            }, 2000);
        };

        const $options = document.querySelectorAll(`.${questionOptClassName}`);

        for (let index = 0; index < $options.length; index++) {
            $options[index].addEventListener("click", onChooseOptions);
        }

        return () => {
            for (let index = 0; index < $options.length; index++) {
                $options[index].removeEventListener("click", onChooseOptions);
            }

            if (timeout.current !== undefined) {
                clearTimeout(timeout.current);
            }
            console.log("---- unmount ----");
        };
    }, [question, answer, questionOptClassName]);

    return { isCorrect, isCommentVisible };
};
