import React, { useState } from 'react'
import PageHeader from '../../PageHeader'
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import Popup from '../../popup';
import { useAppDispatch } from '../../../utils/hook';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { DoctorBulimSchema } from '../../../utils/yup';
import { Paper, } from '@mui/material';

import { useStyles } from './style';
import { registerDoctor } from '../../../store/thunks/assets';
import DoctorForm from './doctorForm/bulimForm';
import DoctorTable from './doctorTable';


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
		resolver: yupResolver(DoctorBulimSchema)
	})

	const handleSubmitForm = async (data: any, e: any) => {
		e.preventDefault()
		try {
			const newDoctor: any = {
				fio: data.fio,
				mutaxassislik: data.mutaxassislik,
				muassasa: data.muassasa,
				departmentId: parseInt(data.departmentId),
			};
			await dispatch(registerDoctor(newDoctor));
			window.location.reload(); // обновить страницу
		} catch (error) {
			console.error('Error sending data:', error);
		}
	};

	return (
		<>
			<PageHeader
				title='Doctor'
				subTitle='Doctorlar'
				icon={<DomainAddOutlinedIcon fontSize='large' />}
			/>

			<Paper className={classes.pageContent} >
				<Popup
					title='Bo`limni ro`yxatdan o`tkazish'
					openPopup={openPopup}
					setOpenPopup={setOpenPopup}
				>
					<form onSubmit={handleSubmit(handleSubmitForm)}>
						<DoctorForm
							register={register}
							errors={errors}
						/>
					</form>

				</Popup>
				<DoctorTable
					setOpenPopup={setOpenPopup}
					openPopup={openPopup}
				/>
			</Paper>
		</>
	)
}
export default BulimPage