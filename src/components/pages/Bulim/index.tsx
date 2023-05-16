import React, { useState } from 'react'
import PageHeader from '../../PageHeader'
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import Popup from '../../popup';
import { useAppDispatch } from '../../../utils/hook';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterBulimSchema } from '../../../utils/yup';
import { Paper, } from '@mui/material';
import BulimForm from './bulimForm/bulimForm';
import BulimTable from './bulimTable';
import { useStyles } from './style';
import { registerBulim } from '../../../store/thunks/assets';


export const BulimPage = () => {
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
        resolver: yupResolver(RegisterBulimSchema)
    })

    const handleSubmitForm = async (data: any, e: any) => {
        e.preventDefault()
        try {
            const newBulim: any = {

                bulimNomi: data.bulimNomi,
                hudud: data.hudud,
                muassasa: data.muassasa,
                telefon: data.telefon,
                bulimBoshligi: data.bulimBoshligi,
                doctors: [
                    {
                        fio: data.fio,
                        mutaxassislik: data.mutaxassislik,
                        departmentId: parseInt(data.departmentId),
                    },
                ],
            };
            await dispatch(registerBulim(newBulim));
            window.location.reload(); // обновить страницу
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <>
            <PageHeader
                title='Bo`lim'
                subTitle='Kardiologiya bo`limlari'
                icon={<DomainAddOutlinedIcon fontSize='large' />}
            />

            <Paper className={classes.pageContent} >
                <Popup
                    title='Bo`limni ro`yxatdan o`tkazish'
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <BulimForm
                            register={register}
                            errors={errors}
                        />
                    </form>

                </Popup>
                <BulimTable
                    setOpenPopup={setOpenPopup}
                    openPopup={openPopup}
                />
            </Paper>
        </>
    )
}
export default BulimPage