import { UserInterfaceSlice } from "./user-interface-slice";
import { UserQuestionSlice } from "./user-question-slice";
import { UserSignupSlice } from "./user-signup-slice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        UserInterface: UserInterfaceSlice.reducer,
        UserSignup: UserSignupSlice.reducer,
        UserQuestion: UserQuestionSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
