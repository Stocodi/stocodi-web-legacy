import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUserQuestion {
    score: number[];
}

export const initialState: IUserQuestion = {
    score: [0, 0, 0, 0, 0, 0],
};

export const UserQuestionSlice = createSlice({
    name: "user-test-slice",

    initialState: initialState,

    reducers: {
        setScore: (state, action: PayloadAction<{ index: number; score: number }>) => {
            state.score[action.payload.index - 1] += action.payload.score * 20;
        },
        initScore: (state) => {
            state.score = [0, 0, 0, 0, 0, 0];
        },
    },
});

export const UserQuestionActions = UserQuestionSlice.actions;
