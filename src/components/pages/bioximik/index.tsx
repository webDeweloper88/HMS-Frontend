import React, { useState } from 'react'
import PageHeader from '../../PageHeader'

import ThermostatAutoOutlinedIcon from '@mui/icons-material/ThermostatAutoOutlined';
import { Paper } from '@mui/material';
import Popup from '../../popup';
import { useStyles } from './style';

import { createBioximik } from '../../../store/thunks/assets';
import { useAppDispatch } from '../../../utils/hook';

import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterBioximikSchema } from '../../../utils/yup';
import { useForm } from 'react-hook-form'
import BioximikForm from './bioximikForm/indeksForm';
import BioximikTable from './bioximikTable';



const BioximikPages = () => {
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
		resolver: yupResolver(RegisterBioximikSchema)
	})

	const handleSubmitForm = async (data: any) => {

		try {
			const newBio: any = {
				bemorId: data.bemorId,
				departmentId: data.departmentId,
				umumiy_oqsil: data.umumiy_oqsil,
				albumin: data.albumin,
				xolesterin_umumiy: data.xolesterin_umumiy,
				trigliseridlar: data.trigliseridlar,
				glyukoza: data.glyukoza,
				mochevina: data.mochevina,
				kreatin: data.kreatin,
				alaninaminotransferaza: data.alaninaminotransferaza,
				aspartataminotransferza: data.aspartataminotransferza,
				gammagglutamilransferza: data.gammagglutamilransferza,
				laktatdegidrogenaza: data.laktatdegidrogenaza,
				a_amilaza: data.a_amilaza,
				ishqoriy_fostataza: data.ishqoriy_fostataza,
				tmol: data.tmol,
				kaliy: data.kaliy,
				kaltsiy: data.kaltsiy,
				temir: data.temir,
				fosfor: data.fosfor,
				xlor: data.xlor

			};

			await dispatch(createBioximik(newBio));
			console.log('newindeks datat', newBio)
			debugger
			window.location.reload(); // obnovit' stranitsu
		} catch (error) {
			console.error('Error sending data:', error);
		}
	};


	return (
		<>
			<PageHeader
				title='QONNING BIOKIMYOVIY TAHLILI '
				subTitle='Biokimyoviy taxlillari'
				icon={<ThermostatAutoOutlinedIcon fontSize='large' />}
			/>
			<Paper className={classes.pageContent} >
				<Popup
					title='Qonning Biokimyoviy taxlili'
					openPopup={openPopup}
					setOpenPopup={setOpenPopup}
				>
					<form onSubmit={handleSubmit(handleSubmitForm)}>
						<BioximikForm
							register={register}
							errors={errors}
						/>
					</form>

				</Popup>
				<BioximikTable
					setOpenPopup={setOpenPopup}
					openPopup={openPopup}
				/>
			</Paper>
		</>
	)
}

export default BioximikPages