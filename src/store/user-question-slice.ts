import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ISubmittedAnswer {
    index: number;
    selectedAnswer: "O" | "X" | "모르겠음";
}

export interface IUserQuestion {
    submittedAnswer: ISubmittedAnswer[];
}

export const initialState: IUserQuestion = {
    submittedAnswer: [],
};

export const UserQuestionSlice = createSlice({
    name: "user-test-slice",

    initialState: initialState,

    reducers: {
        selectAnswer: (state, action: PayloadAction<ISubmittedAnswer>) => {
            const index = state.submittedAnswer.findIndex((element) => element.index === action.payload.index);
            if (index === -1) state.submittedAnswer.push(action.payload);
            else state.submittedAnswer[index] = action.payload;
        },
    },
});

export const UserQuestionActions = UserQuestionSlice.actions;
