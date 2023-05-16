import { createAsyncThunk } from "@reduxjs/toolkit";
import { departmentCreate, departments, doctorCreate, hmsApi, instance } from "../../../utils/axios";




export const getBemorAssets = createAsyncThunk(
    "public_bemor",
    async (_, { rejectWithValue }) => {
        try {
            const bemor = await hmsApi.get("public_bemor");

            return bemor.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.response);
            }
        }
    }
);

export const registerBemor = createAsyncThunk(
    '/create_bemor',
    async (data: any, { rejectWithValue }) => {
        try {
            const bemor = await hmsApi.post("/create_bemor", data)
            return bemor.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.response)
            }
        }
    }
)

export const getDepartmentAssets = createAsyncThunk(
    "departments",
    async (_, { rejectWithValue }) => {
        try {
            const bulim = await departments.get("departments");

            return bulim.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.response);
            }
        }
    }
);

export const registerBulim = createAsyncThunk(
    '/create',
    async (data: any, { rejectWithValue }) => {
        try {
            const bulim = await departmentCreate.post("/create", data)

            return bulim.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.response)
            }
        }
    }
)

export const getDoctortAssets = createAsyncThunk(
    "/doctors",
    async (_, { rejectWithValue }) => {
        try {
            const doctor = await instance.get("/doctors");

            return doctor.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.response);
            }
        }
    }
);
export const registerDoctor = createAsyncThunk(
    '/create_doctor',
    async (data: any, { rejectWithValue }) => {
        try {
            const doctor = await doctorCreate.post("/create_doctor", data)
            return doctor.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.response)
            }
        }
    }
)