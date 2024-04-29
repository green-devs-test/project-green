import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface SearchFieldsState {
    province: string;
    locality: string;
}

const initialState: SearchFieldsState = {
    province: "Mendoza",
    locality: "Capital",
};

export const searchFieldsSlice = createSlice({
    name: "searchFields",
    initialState,
    reducers: {
        setProvince: (state, action: PayloadAction<string>) => {
            state.province = action.payload;
        },
        setLocality: (state, action: PayloadAction<string>) => {
            state.locality = action.payload;
        },
    },
});

export const { setProvince, setLocality } = searchFieldsSlice.actions;

export const selectFields = (state: RootState) => state.fields;

export default searchFieldsSlice.reducer;