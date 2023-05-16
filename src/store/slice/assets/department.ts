import { createSlice } from "@reduxjs/toolkit";
import { getDepartmentAssets } from "../../thunks/assets";

export interface Department {
    id: number;
    bulimNomi: string;
    hudud: string;
    muassasa: string;
    telefon: string;
    bulimBoshligi: string;
    doctors: {
        fio: string;
        mutaxassislik: string;
        departmentId: number;
    }[];
    createdAt: string;
    updatedAt: string;
}

export interface IDepartmentState {
    departments: Department[];
    loading: boolean;

}

const initialState: IDepartmentState = {
    departments: [],
    loading: false,

};

export const departmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDepartmentAssets.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDepartmentAssets.fulfilled, (state, action) => {
                state.loading = false;
                state.departments = action.payload;
            })

    },
});

export default departmentSlice.reducer;