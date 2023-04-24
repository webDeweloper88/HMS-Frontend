import { createSlice } from '@reduxjs/toolkit'
import { IAuthState } from '../../../common/types/auth'

const initialState: IAuthState = {
	user: {
		id: null,
		firstName: '',
		username: '',
		email: '',
		createdAt: '',
		updateAt: '',
		watchList: [
			{
				id: null,
				name: '',
				assetsId: '',
				createdAt: '',
				updateAt: '',
				user: null
			}
		]
	},
	isLogged: true
}


export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action) {

		}
	}
})

export const { login } = authSlice.actions

export default authSlice.reducer 