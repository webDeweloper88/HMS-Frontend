import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/auth';


// Создание Redux-стора с использованием configureStore
const store = configureStore({
	reducer: {
		auth: authSlice // Передача редюсера в стор с ключом 'auth'
	},
});



export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store