import { createSlice } from "@reduxjs/toolkit";

export interface IUserInterface {
    isNavOpen: boolean;
}

const initialState: IUserInterface = {
    isNavOpen: false,
};

export const UserInterfaceSlice = createSlice({
    name: "user-interface-slice",

    initialState: initialState,

    reducers: {
        toggleNav: (state) => {
            if (state.isNavOpen) state.isNavOpen = false;
            else state.isNavOpen = true;
        },
    },
});

export const UserInterfaceActions = UserInterfaceSlice.actions;
