import { createSlice } from "@reduxjs/toolkit";
import { labaratoriesAll } from "../../thunks/assets";

interface Bemor {
	id: number;
	fio: string;
}

interface Department {
	id: number;
	bolim_nomi: string;
}

interface Lab {
	id: number;
	kasallik: string,
	selnaya_kapilyarnaya_krov: string,
	plazma_krovi: string,
	pozoboy_moche: string,
	utreney_moche: string,
	stuchnoy_moche: string,
	sana: string
	bemor: Bemor;
	department: Department;
}

export interface LabState {
	lab: Lab[];
	loading: boolean;

}

const initialState: LabState = {
	lab: [],
	loading: false,

};

export const LabSlice = createSlice({
	name: "Labaratory",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(labaratoriesAll.pending, (state) => {
				state.loading = true;
			})
			.addCase(labaratoriesAll.fulfilled, (state, action) => {
				state.loading = false;
				state.lab = action.payload;
			})

	},
});

export default LabSlice.reducer;