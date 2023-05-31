import { createSlice } from "@reduxjs/toolkit";
import { AnalizkAll } from "../../thunks/assets";

interface Bemor {
	id: number;
	fio: string;
}

interface Department {
	id: number;
	bolim_nomi: string;
}

interface Analiz {
	id: number
	sana: string;
	tibbiy_karta_Raqami: number;
	miqdor: number;
	rang: number;
	tiniq: number;
	nisbiy_zichlik: number;
	reaksiya: number;
	oqsil: number;
	gl: number;
	glyukoza: number;
	geton_tanachalari: number;
	qon_borligini_aniqlash_reaks: number;
	bilirubin: number;
	urobilinoidlar: number;
	ot: number;
	kislotasi: number;
	bemor: Bemor;
	department: Department;
}

export interface AnalizState {
	analiz: Analiz[];
	loading: boolean;

}

const initialState: AnalizState = {
	analiz: [],
	loading: false,

};

export const AnalizSlice = createSlice({
	name: "analiz",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(AnalizkAll.pending, (state) => {
				state.loading = true;
			})
			.addCase(AnalizkAll.fulfilled, (state, action) => {
				state.loading = false;
				state.analiz = action.payload;
			})

	},
});

export default AnalizSlice.reducer;