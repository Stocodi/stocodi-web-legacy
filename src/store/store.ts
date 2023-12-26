import { configureStore } from "@reduxjs/toolkit";

import { UserInterfaceSlice } from "./user-interface-slice";

export const store = configureStore({
    reducer: {
        UserInterface: UserInterfaceSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
