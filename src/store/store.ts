import { configureStore } from "@reduxjs/toolkit";

import { UserInterfaceSlice } from "./UserInterfaceSlice";

export const store = configureStore({
    reducer: {
        UserInterface: UserInterfaceSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
