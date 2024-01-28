import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUserSignup {
    isEmailVerified: boolean;
    isPasswordVerified: boolean;
    isNickNameVerified: boolean;

    email: string;
    password: string;
    name: string;
    nickname: string;
    birth_date: string;
    interest_categories: string[];
    gender: "MALE" | "FEMALE" | null;
}

export const initialState: IUserSignup = {
    isEmailVerified: false,
    isPasswordVerified: false,
    isNickNameVerified: false,

    email: "",
    password: "",
    name: "",
    nickname: "",
    birth_date: "",
    interest_categories: [],
    gender: null,
};

export const UserSignupSlice = createSlice({
    name: "user-signup-slice",

    initialState: initialState,

    reducers: {
        verifyEmail: (state) => {
            state.isEmailVerified = true;
        },
        verifyPassword: (state) => {
            state.isPasswordVerified = true;
        },
        verifyNickName: (state) => {
            state.isNickNameVerified = true;
        },

        unVerifyEmail: (state) => {
            state.isEmailVerified = false;
        },
        unVerifyPassword: (state) => {
            state.isPasswordVerified = false;
        },
        unVerifyNickName: (state) => {
            state.isNickNameVerified = false;
        },

        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setNickName: (state, action: PayloadAction<string>) => {
            state.nickname = action.payload;
        },
        setBirthDate: (state, action: PayloadAction<string>) => {
            state.birth_date = action.payload;
        },
        setGender: (state, action: PayloadAction<"MALE" | "FEMALE" | null>) => {
            state.gender = action.payload;
        },

        toggleCategory: (state, action: PayloadAction<string>) => {
            // 이미 interest_categories 에 존재하면
            if (state.interest_categories.find((element) => element === action.payload)) {
                state.interest_categories = state.interest_categories.filter((element) => {
                    return element !== action.payload;
                });
            }
            // 존재하지 않으면 새로 추가
            else {
                state.interest_categories.push(action.payload);
            }
        },
    },
});

export const UserSignupActions = UserSignupSlice.actions;
