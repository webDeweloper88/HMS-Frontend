
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form'

export interface IpropsLogin<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any,
> {
	navigate: (to: string) => void
	register: UseFormRegister<TFieldValues>;
	errors: FieldErrors<TFieldValues>;
	loading: boolean


}

export interface IpropsRegister<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any,

> {

	navigate: (to: string) => void
	register: UseFormRegister<TFieldValues>;
	errors: FieldErrors<TFieldValues>;
	loading: boolean

}

export interface IAuthState {
	user: IPubUser

	isLogged: boolean
	isLoading: boolean
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

export interface ILoginData {
	email: string
	password: string
}

export interface IRegisterData {
	email: string
	password: string
	firstName: string
	username: string
}

export interface bemorList {

	bemor_id: string,
	FIO: string,
	jinsi: string,
	tugilgan_sana: string,
	buyi: string,
	vazni: string,
	tana_xarorati: string,
	manzili: string,
	ish_joyi: string,
	qayerdan_yuborilgan: string,
	yuborilgan_tashxis: string,
	qabulxona_tashxisi: string,
	shoshilinch_keltirilgan: string,
	qanday_transportda: string,
	createdAt: string,
	updatedAt: string
}


export interface IpropsBemorRegister<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any,

> {

	register: UseFormRegister<TFieldValues>;
	errors: FieldErrors<TFieldValues>;


}