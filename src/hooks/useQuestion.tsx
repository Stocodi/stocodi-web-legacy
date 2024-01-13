import { useState, useEffect } from "react";

/**
 * 금융역량테스트 정답 채점 Hook
 * @param answer 정답 "O" 또는 "X"
 * @param questionOptClassName QuestionOption 의 className Selector
 * @returns
 */
export const useQuestion = (answer: string, questionOptClassName: string) => {
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isCommentVisible, setIsCommentVisible] = useState<boolean>(false);


    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

        const onChooseOptions = (index: number) => {
            let selectedAnswer = "";
            if (index === 0) selectedAnswer = "O";
            else if (index === 1) selectedAnswer = "X";
            else selectedAnswer = "";

            return () => {
                if (selectedAnswer === answer) {
                    setIsCorrect(true);
                } else {
                    setIsCorrect(false);
                }
                timeout = setTimeout(() => {
                    setIsCorrect(null);
                    setIsCommentVisible(true);
                }, 2000);
            };
        };

        },
        [answer],
    );

    useEffect(() => {
        /*
            ❗️❗️❗️
            금융역량테스트 해설 / 채점 뱃지 언마운트 안되는 현상
            Issue #40
            ❗️❗️❗️
        */
        const $options = document.querySelectorAll(`.${questionOptClassName}`);

        for (let index = 0; index < $options.length; index++) {
            $options[index].addEventListener("click", onChooseOptions(index));
        }

        return () => {
            for (let index = 0; index < $options.length; index++) {
                $options[index].removeEventListener("click", onChooseOptions(index));
            }

            // 언마운트 이전 다음 문제에 대해
            // isCorrect null, isCommentVisible false 로 설정
            if (timeout !== undefined) clearTimeout(timeout);
            setIsCorrect(null);
            setIsCommentVisible(false);
        };
    }, [answer, questionOptClassName]);


    return { isCorrect, isCommentVisible };
};
