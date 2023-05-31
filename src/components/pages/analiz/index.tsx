import React, { useState } from 'react'
import PageHeader from '../../PageHeader'

import ThermostatAutoOutlinedIcon from '@mui/icons-material/ThermostatAutoOutlined';
import { Paper } from '@mui/material';
import Popup from '../../popup';
import { useStyles } from './style';

import { createAnaliz } from '../../../store/thunks/assets';
import { useAppDispatch } from '../../../utils/hook';

import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterAnalizSchema } from '../../../utils/yup';
import { useForm } from 'react-hook-form'
import AnalizTable from './analizTable';
import AnalizForm from './analizForm/indeksForm';




const AnalizPages = () => {
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
		resolver: yupResolver(RegisterAnalizSchema)
	})

	const handleSubmitForm = async (data: any) => {

		try {
			const newAnaliz: any = {
				bemorId: data.bemorId,
				departmentId: data.departmentId,
				sana: data.sana,
				tibbiy_karta_Raqami: data.tibbiy_karta_Raqami,
				miqdor: data.miqdor,
				rang: data.rang,
				tiniq: data.tiniq,
				nisbiy_zichlik: data.nisbiy_zichlik,
				reaksiya: data.reaksiya,
				oqsil: data.oqsil,
				gl: data.gl,
				glyukoza: data.glyukoza,
				geton_tanachalari: data.geton_tanachalari,
				qon_borligini_aniqlash_reaks: data.qon_borligini_aniqlash_reaks,
				bilirubin: data.bilirubin,
				urobilinoidlar: data.urobilinoidlar,
				ot: data.ot,
				kislotasi: data.kislotasi,

			};

			await dispatch(createAnaliz(newAnaliz));

			debugger
			window.location.reload(); // obnovit' stranitsu
		} catch (error) {
			console.error('Error sending data:', error);
		}
	};


	return (
		<>
			<PageHeader
				title='SIYDIK TAHLILI '
				subTitle='Siydik taxlillari'
				icon={<ThermostatAutoOutlinedIcon fontSize='large' />}
			/>
			<Paper className={classes.pageContent} >
				<Popup
					title='Siydik taxlili'
					openPopup={openPopup}
					setOpenPopup={setOpenPopup}
				>
					<form onSubmit={handleSubmit(handleSubmitForm)}>
						<AnalizForm
							register={register}
							errors={errors}
						/>
					</form>

				</Popup>
				<AnalizTable
					setOpenPopup={setOpenPopup}
					openPopup={openPopup}
				/>
			</Paper>
		</>
	)
}

export default AnalizPages