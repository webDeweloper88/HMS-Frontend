import * as yup from 'yup'
import { AppErrors } from "../../common/errors";


export const LoginSchema = yup.object().shape({
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(8, AppErrors.minLength)
        .required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.InvalidPassword),
})

export const RegisterSchema = yup.object().shape({
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(8, AppErrors.minLength)
        .required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.InvalidPassword),
    confirmPassword: yup.string()
        .min(8, AppErrors.minLength)
        .required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.InvalidPassword),
    name: yup.string().required(AppErrors.RequiredField),
    username: yup.string().required(AppErrors.RequiredField)
})

export const RegisterBemorSchema = yup.object().shape({
    fio: yup.string().required(AppErrors.RequiredField),
    jinsi: yup.string().required(AppErrors.RequiredField),
    ish_joyi: yup.string().required(AppErrors.RequiredField),
    manzili: yup.string().required(AppErrors.RequiredField),
    tugilgan_sana: yup.string().required(AppErrors.RequiredField),
    buyi: yup.string().required(AppErrors.RequiredField),
    vazni: yup.string().required(AppErrors.RequiredField),
    tana_xarorati: yup.string().required(AppErrors.RequiredField),
    qayerdan_yuborilgan: yup.string().required(AppErrors.RequiredField),
    yuborilgan_tashxis: yup.string().required(AppErrors.RequiredField),
    qabulxona_tashxisi: yup.string().required(AppErrors.RequiredField),
    shoshilinch_keltirilgan: yup.string().required(AppErrors.RequiredField),
    qanday_transportda: yup.string().required(AppErrors.RequiredField),

})
export const RegisterBulimSchema = yup.object().shape({
    bulimNomi: yup.string().required(AppErrors.RequiredField),
    hudud: yup.string().required(AppErrors.RequiredField),
    muassasa: yup.string().required(AppErrors.RequiredField),
    telefon: yup.string().required(AppErrors.RequiredField),
    bulimBoshligi: yup.string().required(AppErrors.RequiredField),
    fio: yup.string().required(AppErrors.RequiredField),
    mutaxassislik: yup.string().required(AppErrors.RequiredField),
    departmentId: yup.number().required(AppErrors.RequiredField),
})
export const DoctorBulimSchema = yup.object().shape({
    fio: yup.string().required(AppErrors.RequiredField),
    mutaxassislik: yup.string().required(AppErrors.RequiredField),
    departmentId: yup.number().required(AppErrors.RequiredField),
})