import { createSlice } from "@reduxjs/toolkit";
import { getDepartmentAssets, getDoctortAssets } from "../../thunks/assets";

export interface Doctor {
    fio: "string",
    mutaxassislik: "string",
    departmentId: number;
    createdAt: string;
    updatedAt: string;
}

export interface IDoctorState {
    doctors: Doctor[];
    loading: boolean;

}

const initialState: IDoctorState = {
    doctors: [],
    loading: false,

};

export const doctorSlice = createSlice({
    name: "doctor",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDoctortAssets.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDoctortAssets.fulfilled, (state, action) => {
                state.loading = false;
                state.doctors = action.payload;
            })

    },
});

export default doctorSlice.reducer;