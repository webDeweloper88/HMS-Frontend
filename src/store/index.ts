import { bemorSlice } from './slice/assets/index';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/auth';
import { departmentSlice } from './slice/assets/department';
import { doctorSlice } from './slice/assets/doctors';
import { indeksSlice } from './slice/assets/Indeks';
import { LabSlice } from './slice/assets/lab';
import { GlSlice } from './slice/assets/gl';
import { BioSlice } from './slice/assets/bio';
import { AnalizSlice } from './slice/assets/analiz';



const store = configureStore({
	reducer: {
		auth: authSlice,
		bemor: bemorSlice.reducer, // использование bemorSlice.reducer вместо bemorSlice
		department: departmentSlice.reducer,
		doctor: doctorSlice.reducer,
		indeks: indeksSlice.reducer,
		labaratory: LabSlice.reducer,
		glyukoza: GlSlice.reducer,
		bioximik: BioSlice.reducer,
		analiz: AnalizSlice.reducer

	},
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;
