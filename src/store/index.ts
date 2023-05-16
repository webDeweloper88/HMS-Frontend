import { bemorSlice } from './slice/assets/index';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/auth';
import { departmentSlice } from './slice/assets/department';
import { doctorSlice } from './slice/assets/doctors';


const store = configureStore({
	reducer: {
		auth: authSlice,
		bemor: bemorSlice.reducer, // использование bemorSlice.reducer вместо bemorSlice
		department: departmentSlice.reducer,
		doctor: doctorSlice.reducer

	},
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;
