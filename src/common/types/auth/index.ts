
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form'

export interface IpropsLogin<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any,
> {
	navigate: (to: string) => void
	register: UseFormRegister<TFieldValues>;
	errors: FieldErrors<TFieldValues>;


}

export interface IpropsRegister {
	setPassword: (value: string) => void
	setEmail: (value: string) => void
	setRepeatPassword: (value: string) => void
	setFirstName: (value: string) => void
	setUsername: (value: string) => void
	navigate: (to: string) => void

}

export interface IAuthState {
	user: IPubUser

	isLogged: boolean
}

export interface IPubUser {
	id: null | number,

	firstName: string

	username: string

	email: string

	createdAt: string

	updateAt: string

	watchList: [IWatchList]
}
interface IWatchList {

	id: null | number

	name: string

	assetsId: string

	createdAt: string

	updateAt: string

	user: null | number
}