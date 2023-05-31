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
    shifokorlar_soni: yup.number().required(AppErrors.RequiredField),

})
export const DoctorBulimSchema = yup.object().shape({
    fio: yup.string().required(AppErrors.RequiredField),
    mutaxassislik: yup.string().required(AppErrors.RequiredField),
    departmentId: yup.number().required(AppErrors.RequiredField),
})

export const RegisterIndeksSchema = yup.object().shape({
    bemorId: yup.number(),
    departmentId: yup.number(),
    rieatm: yup.string(),
    sana: yup.string(),
    t_c: yup.string(),
    shikoyat: yup.string(),
    anamnezis: yup.string(),
    anamnezis_vitae: yup.string(),
    epid: yup.string(),
    status: yup.string(),
    nafas_olish: yup.string(),
    yurak_qon_tomir: yup.string(),
    ovqat_hazm_qilish: yup.string(),
    siydik_chiqarish_tizimi: yup.string(),
    gipotalamo: yup.string(),
    buyi: yup.string(),
    ogirligi: yup.string(),
    imt: yup.string(),
    imt2: yup.string(),
    qalqonsimon_bez: yup.string(),
    qalqonsimon_bezoldi_bez: yup.string(),
    buyrak_usti: yup.string(),
    oshqozon_osti: yup.string(),
    jinsiy_tizim: yup.string(),
    dastlabki_tashxiz: yup.string(),
    asosiy_kasallik: yup.string(),
    hamrox: yup.string(),
    umumiy_qon_taxlili: yup.string(),
    umumiy_siydik_taxlili: yup.string(),
    qondaqand_taxlili: yup.string(),
    bioximik_taxlil: yup.string(),
    rw: yup.string(),
    rengenttekshiruv: yup.string(),
    ekg_tekshiruv: yup.string(),
    parxez: yup.string(),
    davolovchi: yup.string(),
    bolim_mudiri: yup.string(),
    direktor_urinbosari: yup.string()
});
export const RegisterGlyukozaSchema = yup.object().shape({
    bemorId: yup.number(),
    departmentId: yup.number(),
    xona: yup.string(),
    tibbiy_karta: yup.string(),
    g1: yup.string(),
    g2: yup.string(),
    g3: yup.string(),
    g4: yup.string(),
    g5: yup.string(),
    sana: yup.string(),

})
export const RegisterBioximikSchema = yup.object().shape({
    bemorId: yup.number(),
    departmentId: yup.number(),
    umumiy_oqsil: yup.string(),
    albumin: yup.string(),
    xolesterin_umumiy: yup.string(),
    trigliseridlar: yup.string(),
    mochevina: yup.string(),
    kreatin: yup.string(),
    alaninaminotransferaza: yup.string(),
    aspartataminotransferza: yup.string(),
    gammagglutamilransferza: yup.string(),
    laktatdegidrogenaza: yup.string(),
    a_amilaza: yup.string(),
    ishqoriy_fostataza: yup.string(),
    tmol: yup.string(),
    kaliy: yup.string(),
    kaltsiy: yup.string(),
    temir: yup.string(),
    fosfor: yup.string(),
    xlor: yup.string(),

})
export const RegisterAnalizSchema = yup.object().shape({
    bemorId: yup.number(),
    departmentId: yup.number(),
    sana: yup.string(),
    tibbiy_karta_Raqami: yup.number(),
    miqdor: yup.number(),
    rang: yup.number(),
    tiniq: yup.number(),
    nisbiy_zichlik: yup.number(),
    reaksiya: yup.number(),
    oqsil: yup.number(),
    gl: yup.number(),
    glyukoza: yup.number(),
    geton_tanachalari: yup.number(),
    qon_borligini_aniqlash_reaks: yup.number(),
    bilirubin: yup.number(),
    urobilinoidlar: yup.number(),
    ot: yup.number(),
    kislotasi: yup.number(),

})