import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form'


export interface IBemor {
    bemor_id: string,
    fio: string;
    jinsi: string;
    tugilgan_sana: string;
    buyi: string;
    vazni: string;
    tana_xarorati: string;
    manzili: string;
    ish_joyi: string;
    qayerdan_yuborilgan: string;
    yuborilgan_tashxis: string;
    qabulxona_tashxisi: string;
    shoshilinch_keltirilgan: string;
    qanday_transportda: string;
}

export interface IpropsBemorRegister<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,

> {

    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;


}

interface Doctor {
    fio: string;
    mutaxassislik: string;
    departmentId: number;
}

interface Department {
    bulimNomi: string;
    hudud: string;
    muassasa: string;
    telefon: string;
    bulimBoshligi: string;
    doctors: Doctor[];
}