import { Box, Grid, TextField, InputAdornment, Button, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useStyles } from './style';
import { IpropsBemorRegister } from '../../../../common/types/auth';



const IndeksForm: React.FC<IpropsBemorRegister> = (props: IpropsBemorRegister): JSX.Element => {
	const { register, errors } = props
	const classes = useStyles()


	return (
		<div className={classes.root}>
			<Grid container margin={'auto'}>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						label='Bemor Id'
						type='number'
						color='success'
						error={!!errors.bemorId}
						helperText={errors.bemorId ? `${errors.bemorId.message}` : ''}
						{...register('bemorId')}
						name="bemorId"
					/>
					<TextField
						variant='outlined'
						label='Bo`lim Id'
						type='number'
						color='success'
						error={!!errors.departmentId}
						helperText={errors.departmentId ? `${errors.departmentId.message}` : ''}
						{...register('departmentId')}
						name="departmentId"
					/>
					<TextField
						variant='outlined'
						label='rieatm'
						color='success'
						InputLabelProps={{ shrink: true }}
						error={!!errors.rieatm}
						helperText={errors.rieatm ? `${errors.rieatm.message}` : ''}
						{...register('rieatm')}
						name="rieatm"
					/>
					<TextField
						variant='outlined'
						type='date'
						label='sana'
						color='success'
						error={!!errors.sana}
						helperText={errors.sana ? `${errors.sana.message}` : ''}
						{...register('sana')}
						name="sana"
					/>
					<TextField
						variant='outlined'
						label='Tana xarorati'
						color='success'
						error={!!errors.t_c}
						helperText={errors.t_c ? `${errors.t_c.message}` : ''}
						{...register('t_c')}
						name="t_c"
					/>
					<TextField
						variant='outlined'
						label='Shikoyati'
						color='success'
						error={!!errors.shikoyat}
						helperText={errors.shikoyat ? `${errors.shikoyat.message}` : ''}
						{...register('shikoyat')}
						name="shikoyat"
					/>
					<TextField
						variant='outlined'
						label='Anamnezis morbi'
						color='success'
						error={!!errors.anamnezis}
						helperText={errors.anamnezis ? `${errors.anamnezis.message}` : ''}
						{...register('anamnezis')}
						name="anamnezis"
					/>
					<TextField
						variant='outlined'
						label='Anamnezis vitae'
						color='success'
						error={!!errors.anamnezis_vitae}
						helperText={errors.anamnezis_vitae ? `${errors.anamnezis_vitae.message}` : ''}
						{...register('anamnezis_vitae')}
						name="anamnezis_vitae"
					/>
					<TextField
						variant='outlined'
						label='Epid anamnez '
						color='success'
						error={!!errors.epid}
						helperText={errors.epid ? `${errors.epid.message}` : ''}
						{...register('epid')}
						name="epid"
					/>
					<TextField
						variant='outlined'
						label='Status praesens '
						color='success'
						error={!!errors.status}
						helperText={errors.status ? `${errors.status.message}` : ''}
						{...register('status')}
						name="status"
					/>
					<TextField
						variant='outlined'
						label='Nafas olish azolari '
						color='success'
						error={!!errors.nafas_olish}
						helperText={errors.nafas_olish ? `${errors.nafas_olish.message}` : ''}
						{...register('nafas_olish')}
						name="nafas_olish"
					/>
					<TextField
						variant='outlined'
						label='Yurak qon tomir tizmi '
						color='success'
						error={!!errors.yurak_qon_tomir}
						helperText={errors.yurak_qon_tomir ? `${errors.yurak_qon_tomir.message}` : ''}
						{...register('yurak_qon_tomir')}
						name="yurak_qon_tomir"
					/>
					<TextField
						variant='outlined'
						label='Ovqat hazm qilish tizmi '
						color='success'
						error={!!errors.ovqat_hazm_qilish}
						helperText={errors.ovqat_hazm_qilish ? `${errors.ovqat_hazm_qilish.message}` : ''}
						{...register('ovqat_hazm_qilish')}
						name="ovqat_hazm_qilish"
					/>

				</Grid>
				<Box width={'100%'} alignContent={'center'}>
					<Typography variant='h3' sx={{ textAlign: 'center' }}>ENDOKRIN STATUS</Typography>
				</Box>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						label='Siydik chiqarish tizmi '
						color='success'
						error={!!errors.siydik_chiqarish_tizimi}
						helperText={errors.siydik_chiqarish_tizimi ? `${errors.siydik_chiqarish_tizimi.message}` : ''}
						{...register('siydik_chiqarish_tizimi')}
						name="siydik_chiqarish_tizimi"
					/>
					<TextField
						variant='outlined'
						label='Gipotalamo gipofizar tizim '
						color='success'
						error={!!errors.gipotalamo}
						helperText={errors.gipotalamo ? `${errors.gipotalamo.message}` : ''}
						{...register('gipotalamo')}
						name="gipotalamo"
					/>
					<TextField
						variant='outlined'
						label='Gipotalamo gipofizar tizim bo`yi '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">sm</InputAdornment> }}
						error={!!errors.buyi}
						helperText={errors.buyi ? `${errors.buyi.message}` : ''}
						{...register('buyi')}
						name="buyi"
					/>
					<TextField
						variant='outlined'
						label='Gipotalamo gipofizar tizim ogirligi '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">kg</InputAdornment> }}
						error={!!errors.ogirligi}
						helperText={errors.ogirligi ? `${errors.ogirligi.message}` : ''}
						{...register('ogirligi')}
						name="ogirligi"
					/>
					<TextField
						variant='outlined'
						label='Gipotalamo gipofizar tizim IMT'
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">kg/m<sub>2</sub></InputAdornment> }}
						error={!!errors.imt}
						helperText={errors.imt ? `${errors.imt.message}` : ''}
						{...register('imt')}
						name="imt"
					/>
					<TextField
						variant='outlined'
						label='Qalqonsimon bez'
						color='success'
						error={!!errors.qalqonsimon_bez}
						helperText={errors.qalqonsimon_bez ? `${errors.qalqonsimon_bez.message}` : ''}
						{...register('qalqonsimon_bez')}
						name="qalqonsimon_bez"
					/>
					<TextField
						variant='outlined'
						label='Qalqonsimon bez oldi bezi'
						color='success'
						error={!!errors.qalqonsimon_bezoldi_bez}
						helperText={errors.qalqonsimon_bezoldi_bez ? `${errors.qalqonsimon_bezoldi_bez.message}` : ''}
						{...register('qalqonsimon_bezoldi_bez')}
						name="qalqonsimon_bezoldi_bez"
					/>
					<TextField
						variant='outlined'
						label='Buyrak usti bezlari'
						color='success'
						error={!!errors.buyrak_usti}
						helperText={errors.buyrak_usti ? `${errors.buyrak_usti.message}` : ''}
						{...register('buyrak_usti')}
						name="buyrak_usti"
					/>
					<TextField
						variant='outlined'
						label='Oshqozon osti bezi'
						color='success'
						error={!!errors.oshqozon_osti}
						helperText={errors.oshqozon_osti ? `${errors.oshqozon_osti.message}` : ''}
						{...register('oshqozon_osti')}
						name="oshqozon_osti"
					/>
					<TextField
						variant='outlined'
						label='Jinsiy tizm'
						color='success'
						error={!!errors.jinsiy_tizim}
						helperText={errors.jinsiy_tizim ? `${errors.jinsiy_tizim.message}` : ''}
						{...register('jinsiy_tizim')}
						name="jinsiy_tizim"
					/>
					<TextField
						variant='outlined'
						label='Kasalxonadagi dastlabki tashxis'
						color='success'
						error={!!errors.dastlabki_tashxiz}
						helperText={errors.dastlabki_tashxiz ? `${errors.dastlabki_tashxiz.message}` : ''}
						{...register('dastlabki_tashxiz')}
						name="dastlabki_tashxiz"
					/>
					<TextField
						variant='outlined'
						label='Asosiy kasallik asorati'
						color='success'
						error={!!errors.asosiy_kasallik}
						helperText={errors.asosiy_kasallik ? `${errors.asosiy_kasallik.message}` : ''}
						{...register('asosiy_kasallik')}
						name="asosiy_kasallik"
					/>
					<TextField
						variant='outlined'
						label='Hamroh kasalliklari'
						color='success'
						error={!!errors.hamrox}
						helperText={errors.hamrox ? `${errors.hamrox.message}` : ''}
						{...register('hamrox')}
						name="hamrox"
					/>
				</Grid>
				<Box width={'100%'} alignContent={'center'}>
					<Typography variant='h3' sx={{ textAlign: 'center' }}>Laborator tahlillari</Typography>
				</Box>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						label='Umumiy qon tahlili'
						color='success'
						error={!!errors.umumiy_qon_taxlili}
						helperText={errors.umumiy_qon_taxlili ? `${errors.umumiy_qon_taxlili.message}` : ''}
						{...register('umumiy_qon_taxlili')}
						name="umumiy_qon_taxlili"
					/>
					<TextField
						variant='outlined'
						label='Umumiy siydik tahlili'
						color='success'
						error={!!errors.umumiy_siydik_taxlili}
						helperText={errors.umumiy_siydik_taxlili ? `${errors.umumiy_siydik_taxlili.message}` : ''}
						{...register('umumiy_siydik_taxlili')}
						name="umumiy_siydik_taxlili"
					/>
					<TextField
						variant='outlined'
						label=' Qonda qand tahlili: glikemik profil: 17:00- 20:00 - 03:00-07:00-10:00-13:00 Da'
						color='success'
						error={!!errors.qondaqand_taxlili}
						helperText={errors.qondaqand_taxlili ? `${errors.qondaqand_taxlili.message}` : ''}
						{...register('qondaqand_taxlili')}
						name="qondaqand_taxlili"
					/>
					<TextField
						variant='outlined'
						label=' Bioximik tahlillar: kreatinin, mochevina, umumiy oqsil, ALT; ACT;xolestirin, qon ivish vaqti.'
						color='success'
						error={!!errors.bioximik_taxlil}
						helperText={errors.bioximik_taxlil ? `${errors.bioximik_taxlil.message}` : ''}
						{...register('bioximik_taxlil')}
						name="bioximik_taxlil"
					/>
					<TextField
						variant='outlined'
						label='RW ga qon tekshiruvch'
						color='success'
						error={!!errors.rw}
						helperText={errors.rw ? `${errors.rw.message}` : ''}
						{...register('rw')}
						name="rw"
					/>

				</Grid>
				<Box width={'100%'} alignContent={'center'}>
					<Typography variant='h3' sx={{ textAlign: 'center' }}>Instrumental tekshiruvlar</Typography>
				</Box>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						label='Rentgenorafiya'
						color='success'
						error={!!errors.rengenttekshiruv}
						helperText={errors.rengenttekshiruv ? `${errors.rengenttekshiruv.message}` : ''}
						{...register('rengenttekshiruv')}
						name="rengenttekshiruv"
					/>
					<TextField
						variant='outlined'
						label='EKG tekshiruvi'
						color='success'
						error={!!errors.ekg_tekshiruv}
						helperText={errors.ekg_tekshiruv ? `${errors.ekg_tekshiruv.message}` : ''}
						{...register('ekg_tekshiruv')}
						name="ekg_tekshiruv"
					/>
				</Grid>
				<Box width={'100%'} alignContent={'center'}>
					<Typography variant='h3' sx={{ textAlign: 'center' }}>Davolash muolojalari</Typography>
				</Box>
				<Grid item xs={12}>
					<TextField
						variant='outlined'
						label='Parxez'
						color='success'
						error={!!errors.parxez}
						helperText={errors.parxez ? `${errors.parxez.message}` : ''}
						{...register('parxez')}
						name="parxez"
					/>
					<TextField
						variant='outlined'
						label='Davolovchi shifokor'
						placeholder='Davolovchi shifokor F.I.O'
						color='success'
						error={!!errors.davolovchi}
						helperText={errors.davolovchi ? `${errors.davolovchi.message}` : ''}
						{...register('davolovchi')}
						name="davolovchi"
					/>
					<TextField
						variant='outlined'
						label='Bo`lim mudiri'
						placeholder='Bo`lim mudiri F.I.O'
						color='success'
						error={!!errors.bolim_mudiri}
						helperText={errors.bolim_mudiri ? `${errors.bolim_mudiri.message}` : ''}
						{...register('bolim_mudiri')}
						name="bolim_mudiri"
					/>
					<TextField
						variant='outlined'
						label='Dirktor o`rinbosari'
						placeholder='Dirktor o`rinbosari F.I.O'
						color='success'
						error={!!errors.direktor_urinbosari}
						helperText={errors.direktor_urinbosari ? `${errors.direktor_urinbosari.message}` : ''}
						{...register('direktor_urinbosari')}
						name="direktor_urinbosari"
					/>
				</Grid>
			</Grid>

			<Box sx={{ display: 'flex', gap: 5, justifyContent: "center", width: '100%', margin: "25px 0px" }}>
				<Button variant='contained' color='info' size='large' type='submit'>submit</Button>
				<Button variant='contained' color='info' size='large' type='reset'>reset</Button>
			</Box>


		</div >
	)
}

export default IndeksForm