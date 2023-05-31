import { Box, Grid, TextField, InputAdornment, Button, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useStyles } from './style';
import { IpropsBemorRegister } from '../../../../common/types/auth';



const AnalizForm: React.FC<IpropsBemorRegister> = (props: IpropsBemorRegister): JSX.Element => {
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
						type='date'
						label='Biomaxsulot olingan sana'
						color='success'
						InputLabelProps={{ shrink: true }}
						error={!!errors.sana}
						helperText={errors.sana ? `${errors.sana.message}` : ''}
						{...register('sana')}
						name="sana"
					/>
					<TextField
						variant='outlined'
						label='Tibbiy kartasi № '
						color='success'
						error={!!errors.tibbiy_karta_Raqami}
						helperText={errors.tibbiy_karta_Raqami ? `${errors.tibbiy_karta_Raqami.message}` : ''}
						{...register('tibbiy_karta_Raqami')}
						name="tibbiy_karta_Raqami"
					/>
					<TextField
						variant='outlined'
						label='miqdor  '
						type='number'
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">ml</InputAdornment> }}
						error={!!errors.miqdor}
						helperText={errors.miqdor ? `${errors.miqdor.message}` : ''}
						{...register('miqdor')}
						name="miqdor"
					/>
					<TextField
						variant='outlined'
						label='rang  '
						type='number'
						color='success'

						error={!!errors.rang}
						helperText={errors.rang ? `${errors.rang.message}` : ''}
						{...register('rang')}
						name="rang"
					/>
					<TextField
						variant='outlined'
						label='miqdor  '
						type='number'
						color='success'
						error={!!errors.tiniq}
						helperText={errors.tiniq ? `${errors.tiniq.message}` : ''}
						{...register('tiniq')}
						name="tiniq"
					/>
					<TextField
						variant='outlined'
						label='nisbiy_zichlik  '
						type='number'
						color='success'
						error={!!errors.nisbiy_zichlik}
						helperText={errors.nisbiy_zichlik ? `${errors.nisbiy_zichlik.message}` : ''}
						{...register('nisbiy_zichlik')}
						name="nisbiy_zichlik"
					/>
					<TextField
						variant='outlined'
						label='reaksiya  '
						type='number'
						color='success'
						error={!!errors.reaksiya}
						helperText={errors.reaksiya ? `${errors.reaksiya.message}` : ''}
						{...register('reaksiya')}
						name="reaksiya"
					/>
					<TextField
						variant='outlined'
						label='oqsil  '
						type='number'
						color='success'
						error={!!errors.oqsil}
						helperText={errors.oqsil ? `${errors.oqsil.message}` : ''}
						{...register('oqsil')}
						name="oqsil"
					/>
					<TextField
						variant='outlined'
						label='gl  '
						type='number'
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">mmol/l</InputAdornment> }}
						error={!!errors.gl}
						helperText={errors.gl ? `${errors.gl.message}` : ''}
						{...register('gl')}
						name="gl"
					/>
					<TextField
						variant='outlined'
						label='glyukoza  '
						type='number'
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">mmol/l</InputAdornment> }}
						error={!!errors.glyukoza}
						helperText={errors.glyukoza ? `${errors.glyukoza.message}` : ''}
						{...register('glyukoza')}
						name="glyukoza"
					/>
					<TextField
						variant='outlined'
						label='geton_tanachalari  '
						type='number'
						color='success'
						error={!!errors.geton_tanachalari}
						helperText={errors.geton_tanachalari ? `${errors.geton_tanachalari.message}` : ''}
						{...register('geton_tanachalari')}
						name="geton_tanachalari"
					/>
					<TextField
						variant='outlined'
						label='qon_borligini_aniqlash_reaks  '
						type='number'
						color='success'
						error={!!errors.qon_borligini_aniqlash_reaks}
						helperText={errors.qon_borligini_aniqlash_reaks ? `${errors.qon_borligini_aniqlash_reaks.message}` : ''}
						{...register('qon_borligini_aniqlash_reaks')}
						name="qon_borligini_aniqlash_reaks"
					/>
					<TextField
						variant='outlined'
						label='qon_borligini_aniqlash_reaks  '
						type='number'
						color='success'
						error={!!errors.bilirubin}
						helperText={errors.bilirubin ? `${errors.bilirubin.message}` : ''}
						{...register('bilirubin')}
						name="bilirubin"
					/>
					<TextField
						variant='outlined'
						label='urobilinoidlar  '
						type='number'
						color='success'
						error={!!errors.urobilinoidlar}
						helperText={errors.urobilinoidlar ? `${errors.urobilinoidlar.message}` : ''}
						{...register('urobilinoidlar')}
						name="urobilinoidlar"
					/>
					<TextField
						variant='outlined'
						label='ot  '
						type='number'
						color='success'
						error={!!errors.ot}
						helperText={errors.ot ? `${errors.ot.message}` : ''}
						{...register('ot')}
						name="ot"
					/>
					<TextField
						variant='outlined'
						label='kislotasi  '
						type='number'
						color='success'
						error={!!errors.kislotasi}
						helperText={errors.kislotasi ? `${errors.kislotasi.message}` : ''}
						{...register('ot')}
						name="kislotasi"
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

export default AnalizForm