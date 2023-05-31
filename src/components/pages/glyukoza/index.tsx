import React, { useState } from 'react'
import PageHeader from '../../PageHeader'

import ScatterPlotOutlinedIcon from '@mui/icons-material/ScatterPlotOutlined';
import { Paper } from '@mui/material';
import Popup from '../../popup';
import { useStyles } from './style';

import { createGlyukoza, getIndeks } from '../../../store/thunks/assets';
import { useAppDispatch } from '../../../utils/hook';

import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterGlyukozaSchema } from '../../../utils/yup';
import { useForm } from 'react-hook-form'
import GlyukozaTable from './glyukozaTable';
import GlyukozaForm from './glyukozaForm/indeksForm';


const GlyukozaPages = () => {
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
		resolver: yupResolver(RegisterGlyukozaSchema)
	})

	const handleSubmitForm = async (data: any) => {

		try {
			const newGlyukoza: any = {
				bemorId: data.bemorId,
				departmentId: data.departmentId,
				xona: data.xona,
				tibbiy_karta: data.tibbiy_karta,
				g1: data.g1,
				g2: data.g2,
				g3: data.g3,
				g4: data.g4,
				g5: data.g5,
				sana: data.sana
			};

			await dispatch(createGlyukoza(newGlyukoza));
			console.log('newindeks datat', newGlyukoza)
			debugger
			window.location.reload(); // obnovit' stranitsu
		} catch (error) {
			console.error('Error sending data:', error);
		}
	};


	return (
		<>
			<PageHeader
				title='ГЛЮКОЗА БОРЛИГИНИ АНИҚЛАШ БЎЙИЧА ҚОН	ТАҲЛИЛИ '
				subTitle='Glyukoza taxlillari'
				icon={<ScatterPlotOutlinedIcon fontSize='large' />}
			/>
			<Paper className={classes.pageContent} >
				<Popup
					title='Glyukoza borrligini aniqlash bo`yichaqon taxlili'
					openPopup={openPopup}
					setOpenPopup={setOpenPopup}
				>
					<form onSubmit={handleSubmit(handleSubmitForm)}>
						<GlyukozaForm
							register={register}
							errors={errors}
						/>
					</form>

				</Popup>
				<GlyukozaTable
					setOpenPopup={setOpenPopup}
					openPopup={openPopup}
				/>
			</Paper>
		</>
	)
}

export default GlyukozaPages