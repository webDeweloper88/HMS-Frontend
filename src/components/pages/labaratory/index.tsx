import React, { useState } from 'react'
import PageHeader from '../../PageHeader'
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import { Paper } from '@mui/material';
import Popup from '../../popup';
import { useStyles } from './style';

import { getIndeks } from '../../../store/thunks/assets';
import { useAppDispatch } from '../../../utils/hook';
import IndeksForm from './indeksForm/indeksForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterIndeksSchema } from '../../../utils/yup';
import { useForm } from 'react-hook-form'
import LabaratoryTable from './labTable';

const LabaratoryPages = () => {
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
		resolver: yupResolver(RegisterIndeksSchema)
	})

	const handleSubmitForm = async (data: any) => {

		try {
			const newIndeks: any = {
				bemorId: data.bemorId,
				departmentId: data.departmentId,
				rieatm: data.rieatm,
				sana: data.sana,
				t_c: data.t_c,
				shikoyat: data.shikoyat,
				anamnezis: data.anamnezis,
				anamnezis_vitae: data.anamnezis_vitae,
				epid: data.epid,
				status: data.status,
				nafas_olish: data.nafas_olish,
				yurak_qon_tomir: data.yurak_qon_tomir,
				ovqat_hazm_qilish: data.ovqat_hazm_qilish,
				siydik_chiqarish_tizimi: data.siydik_chiqarish_tizimi,
				gipotalamo: data.gipotalamo,
				buyi: data.buyi,
				ogirligi: data.ogirligi,
				imt: data.imt,
				imt2: data.imt2 || 'test',
				qalqonsimon_bez: data.qalqonsimon_bez,
				qalqonsimon_bezoldi_bez: data.qalqonsimon_bezoldi_bez,
				buyrak_usti: data.buyrak_usti,
				oshqozon_osti: data.oshqozon_osti,
				jinsiy_tizim: data.jinsiy_tizim,
				dastlabki_tashxiz: data.dastlabki_tashxiz,
				asosiy_kasallik: data.asosiy_kasallik,
				hamrox: data.hamrox,
				umumiy_qon_taxlili: data.umumiy_qon_taxlili,
				umumiy_siydik_taxlili: data.umumiy_siydik_taxlili,
				qondaqand_taxlili: data.qondaqand_taxlili,
				bioximik_taxlil: data.bioximik_taxlil,
				rw: data.rw,
				rengenttekshiruv: data.rengenttekshiruv,
				ekg_tekshiruv: data.ekg_tekshiruv,
				parxez: data.parxez,
				davolovchi: data.davolovchi,
				bolim_mudiri: data.bolim_mudiri,
				direktor_urinbosari: data.direktor_urinbosari
			};

			await dispatch(getIndeks(newIndeks));
			console.log('newindeks datat', newIndeks)
			debugger
			window.location.reload(); // obnovit' stranitsu
		} catch (error) {
			console.error('Error sending data:', error);
		}
	};


	return (
		<>
			<PageHeader
				title='Labaratoriya '
				subTitle='Labaratoriya taxlillari'
				icon={<ScienceOutlinedIcon fontSize='large' />}
			/>
			<Paper className={classes.pageContent} >
				<Popup
					title='Labaratoriya tekshiruv'
					openPopup={openPopup}
					setOpenPopup={setOpenPopup}
				>
					<form onSubmit={handleSubmit(handleSubmitForm)}>
						<IndeksForm
							register={register}
							errors={errors}
						/>
					</form>

				</Popup>
				<LabaratoryTable
					setOpenPopup={setOpenPopup}
					openPopup={openPopup}
				/>
			</Paper>
		</>
	)
}

export default LabaratoryPages