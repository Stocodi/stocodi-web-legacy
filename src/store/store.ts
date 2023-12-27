import { configureStore } from "@reduxjs/toolkit";

import { UserInterfaceSlice } from "./user-interface-slice";
import { UserSignupSlice } from "./user-signup-slice";

export const store = configureStore({
    reducer: {
        UserInterface: UserInterfaceSlice.reducer,
        UserSignup: UserSignupSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
