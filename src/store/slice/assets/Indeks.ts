import { createSlice } from "@reduxjs/toolkit";
import { getIndeksAll } from "../../thunks/assets";

interface Bemor {
	id: number;
	fio: string;
}

interface Department {
	id: number;
	bolim_nomi: string;
}

interface Indeks {
	id: number;
	rieatm: string;
	sana: string;
	t_c: string;
	shikoyat: string;
	anamnezis: string;
	anamnezis_vitae: string;
	epid: string;
	status: string;
	nafas_olish: string;
	yurak_qon_tomir: string;
	ovqat_hazm_qilish: string;
	siydik_chiqarish_tizimi: string;
	gipotalamo: string;
	buyi: string;
	ogirligi: string;
	imt: string;
	imt2: string;
	qalqonsimon_bez: string;
	qalqonsimon_bezoldi_bez: string;
	buyrak_usti: string;
	oshqozon_osti: string;
	jinsiy_tizim: string;
	dastlabki_tashxiz: string;
	asosiy_kasallik: string;
	hamrox: null | any;
	umumiy_qon_taxlili: string;
	umumiy_siydik_taxlili: string;
	qondaqand_taxlili: string;
	bioximik_taxlil: string;
	rw: string;
	rengenttekshiruv: string;
	ekg_tekshiruv: string;
	parxez: null | any;
	davolovchi: string;
	bolim_mudiri: string;
	direktor_urinbosari: string;
	createdAt: string;
	updatedAt: string;
	bemor: Bemor;
	department: Department;
}

export interface IndeksState {
	indeks: Indeks[];
	loading: boolean;

}

const initialState: IndeksState = {
	indeks: [],
	loading: false,

};

export const indeksSlice = createSlice({
	name: "indeks",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getIndeksAll.pending, (state) => {
				state.loading = true;
			})
			.addCase(getIndeksAll.fulfilled, (state, action) => {
				state.loading = false;
				state.indeks = action.payload;
			})

	},
});

export default indeksSlice.reducer;