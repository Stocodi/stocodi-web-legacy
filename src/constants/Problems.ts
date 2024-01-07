export interface IProblem {
    question: string;
    options: string[];
    answer: number;
    comment: string;
}

export const Problems: IProblem[] = [
    {
        question: "문제",
        options: ["O", "X"],
        answer: 0,
        comment: "문제해설",
    },
];
