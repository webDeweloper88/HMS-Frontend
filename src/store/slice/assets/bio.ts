import { createSlice } from "@reduxjs/toolkit";
import { bioximikAll } from "../../thunks/assets";

interface Bemor {
	id: number;
	fio: string;
}

interface Department {
	id: number;
	bolim_nomi: string;
}

interface Bio {
	id: number
	xona: string,
	tibbiy_karta: string,
	umumiy_oqsil: string;
	albumin: string;
	xolesterin_umumiy: string;
	trigliseridlar: string;
	glyukoza: string;
	mochevina: string;
	kreatin: string;
	alaninaminotransferaza: string;
	aspartataminotransferza: string;
	gammagglutamilransferza: string;
	laktatdegidrogenaza: string;
	a_amilaza: string;
	ishqoriy_fostataza: string;
	tmol: string;
	kaliy: string;
	kaltsiy: string;
	temir: string;
	fosfor: string;
	xlor: string;
	bemor: Bemor;
	department: Department;
}

export interface BioState {
	bio: Bio[];
	loading: boolean;

}

const initialState: BioState = {
	bio: [],
	loading: false,

};

export const BioSlice = createSlice({
	name: "bioximik",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(bioximikAll.pending, (state) => {
				state.loading = true;
			})
			.addCase(bioximikAll.fulfilled, (state, action) => {
				state.loading = false;
				state.bio = action.payload;
			})

	},
});

export default BioSlice.reducer;