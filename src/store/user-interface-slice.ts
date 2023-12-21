import { createSlice } from "@reduxjs/toolkit";

export interface IUserInterface {}

const initialState: IUserInterface = {};

export const UserInterfaceSlice = createSlice({
    name: "user-interface-slice",

    initialState: initialState,

    reducers: {},
});
