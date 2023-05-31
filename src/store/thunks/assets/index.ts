import { createAsyncThunk } from "@reduxjs/toolkit";
import { IndeksAll, departmentCreate, departments, doctorCreate, hmsApi, instance } from "../../../utils/axios";




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

export const getIndeksAll = createAsyncThunk(
    "all",
    async (_, { rejectWithValue }) => {
        try {
            const indeksAll = await IndeksAll.get("all");
            return indeksAll.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.response);
            }
        }
    }
);
export const labaratoriesAll = createAsyncThunk(
    "/labaratories/all",
    async (_, { rejectWithValue }) => {
        try {
            const labAll = await instance.get("/labaratories/all");
            return labAll.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.response);
            }
        }
    }
);

export const glyukozaAll = createAsyncThunk(
    "/glyukoza/all",
    async (_, { rejectWithValue }) => {
        try {
            const glyukozaAll = await instance.get("/glyukoza/all");
            return glyukozaAll.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.response);
            }
        }
    }
);
export const bioximikAll = createAsyncThunk(
    "/bioximik/All",
    async (_, { rejectWithValue }) => {
        try {
            const bioximikAll = await instance.get("/bioximik/All");
            return bioximikAll.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.response);
            }
        }
    }
);



export const createGlyukoza = createAsyncThunk(
    '/glyukoza/create',
    async (data: any, { rejectWithValue }) => {
        try {
            const createGlyukoza = await instance.post("/glyukoza/create", data)

            return createGlyukoza.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.response)
            }
        }
    }
)
export const createBioximik = createAsyncThunk(
    '/bioximik/create_bioximik',
    async (data: any, { rejectWithValue }) => {
        try {
            const createBioximik = await instance.post("/bioximik/create_bioximik", data)

            return createBioximik.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.response)
            }
        }
    }
)
export const AnalizkAll = createAsyncThunk(
    "/analiz/All",
    async (_, { rejectWithValue }) => {
        try {
            const AnalizAll = await instance.get("/analiz/All");
            return AnalizAll.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.response);
            }
        }
    }
);

export const createAnaliz = createAsyncThunk(
    '/bioximik/create_analiz',
    async (data: any, { rejectWithValue }) => {
        try {
            const createAnaliz = await instance.post("/bioximik/create_analiz", data)

            return createAnaliz.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.response)
            }
        }
    }
)
export const getIndeks = createAsyncThunk(
    '/indeks/create',
    async (data: any, { rejectWithValue }) => {
        try {
            const indeks = await instance.post("/indeks/create", data)
            return indeks.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.response)
            }
        }
    }
)