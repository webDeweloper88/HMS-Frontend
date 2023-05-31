import { createSlice } from "@reduxjs/toolkit";
import { glyukozaAll } from "../../thunks/assets";

interface Bemor {
	id: number;
	fio: string;
}

interface Department {
	id: number;
	bolim_nomi: string;
}

interface Gl {
	xona: string,
	tibbiy_karta: string,
	g1: string,
	g2: string,
	g3: string,
	g4: string,
	g5: string,
	sana: string
	bemor: Bemor;
	department: Department;
}

export interface GlState {
	gl: Gl[];
	loading: boolean;

}

const initialState: GlState = {
	gl: [],
	loading: false,

};

export const GlSlice = createSlice({
	name: "glyukoza",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(glyukozaAll.pending, (state) => {
				state.loading = true;
			})
			.addCase(glyukozaAll.fulfilled, (state, action) => {
				state.loading = false;
				state.gl = action.payload;
			})

	},
});

export default GlSlice.reducer;