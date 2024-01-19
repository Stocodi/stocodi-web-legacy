import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SelectedAnswer = "O" | "X" | "모르겠음" | null;

export interface IPayload {
    index: number;
    selectedAnswer: number;
}

export interface IUserQuestion {
    submittedAnswer: SelectedAnswer[];
}

export const initialState: IUserQuestion = {
    submittedAnswer: Array.from(Array(30)) as SelectedAnswer[],
};

export const UserQuestionSlice = createSlice({
    name: "user-test-slice",

    initialState: initialState,

    reducers: {
        selectAnswer: (state, action: PayloadAction<IPayload>) => {
            if (action.payload.selectedAnswer === 0) state.submittedAnswer[action.payload.index - 1] = "O";
            else if (action.payload.selectedAnswer === 1) state.submittedAnswer[action.payload.index - 1] = "X";
            else if (action.payload.selectedAnswer === 2) state.submittedAnswer[action.payload.index - 1] = "모르겠음";
        },
    },
});

export const UserQuestionActions = UserQuestionSlice.actions;
