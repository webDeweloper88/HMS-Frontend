import React, { useState } from 'react'
import PageHeader from '../../PageHeader'
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import { useStyles } from './style';
import BemorTable from './BemorTable';
import Popup from '../../popup';
import { useAppDispatch } from '../../../utils/hook';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterBemorSchema } from '../../../utils/yup';
import { registerBemor } from '../../../store/thunks/assets'
import BemorForm from './bemorForm/BemorForm';
import { Paper } from '@mui/material';




export const BemorPage = () => {
    const classes = useStyles()
    const [openPopup, setOpenPopup] = useState(false)
    const dispatch = useAppDispatch()
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        resolver: yupResolver(RegisterBemorSchema)
    })

    const handleSubmitForm = async (data: any) => {
        try {
            const newBemor: any = {
                fio: data.fio,
                jinsi: data.jinsi,
                tugilgan_sana: data.tugilgan_sana || 'test', // если значение не задано, то передаем пустую строку
                buyi: data.buyi,
                vazni: data.vazni,
                tana_xarorati: data.tana_xarorati || 'test',
                manzili: data.manzili,
                ish_joyi: data.ish_joyi || 'test',
                qayerdan_yuborilgan: data.qayerdan_yuborilgan || 'test', // если значение не задано, то передаем пустую строку
                yuborilgan_tashxis: data.yuborilgan_tashxis || 'test',
                qabulxona_tashxisi: data.qabulxona_tashxisi || 'test', // если значение не задано, то передаем пустую строку
                shoshilinch_keltirilgan: data.shoshilinch_keltirilgan || 'test', // если значение не задано, то передаем пустую строку
                qanday_transportda: data.qanday_transportda || 'test', // если значение не задано, то передаем пустую строку
            }
            await dispatch(registerBemor(newBemor))
            window.location.reload(); // обновить страницу
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    return (
        <>
            <PageHeader
                title='Bemor'
                subTitle='Bemor'
                icon={<GroupAddOutlinedIcon fontSize='large' />}
            />
            <Paper className={classes.pageContent} >
                <Popup
                    title='Bemorni ro`yxatdan o`tkazish'
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <BemorForm
                            register={register}
                            errors={errors}
                        />
                    </form>
                </Popup>
                <BemorTable
                    setOpenPopup={setOpenPopup}
                    openPopup={openPopup}
                />
            </Paper>

        </>
    )
}
export default BemorPage