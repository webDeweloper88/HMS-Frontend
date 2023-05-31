import { Box, Grid, TextField, InputAdornment, Button, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useStyles } from './style';
import { IpropsBemorRegister } from '../../../../common/types/auth';



const BioximikForm: React.FC<IpropsBemorRegister> = (props: IpropsBemorRegister): JSX.Element => {
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
						label='Umumiy oqsil'
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">g/l</InputAdornment> }}
						error={!!errors.xona}
						helperText={errors.umumiy_oqsil ? `${errors.umumiy_oqsil.message}` : ''}
						{...register('umumiy_oqsil')}
						name="umumiy_oqsil"
					/>
					<TextField
						variant='outlined'
						label='Albumin '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">g/l</InputAdornment> }}
						error={!!errors.albumin}
						helperText={errors.albumin ? `${errors.albumin.message}` : ''}
						{...register('albumin')}
						name="albumin"
					/>
					<TextField
						variant='outlined'
						label='Xolesterin (umumiy)'
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">g/l</InputAdornment> }}
						error={!!errors.xolesterin_umumiy}
						helperText={errors.xolesterin_umumiy ? `${errors.xolesterin_umumiy.message}` : ''}
						{...register('xolesterin_umumiy')}
						name="xolesterin_umumiy"
					/>
					<TextField
						variant='outlined'
						label='Triglitseridlar '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">mmol/l</InputAdornment> }}
						error={!!errors.trigliseridlar}
						helperText={errors.trigliseridlar ? `${errors.trigliseridlar.message}` : ''}
						{...register('trigliseridlar')}
						name="trigliseridlar"
					/>
					<TextField
						variant='outlined'
						label='Glyukoza '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">mmol/l</InputAdornment> }}
						error={!!errors.glyukoza}
						helperText={errors.glyukoza ? `${errors.glyukoza.message}` : ''}
						{...register('glyukoza')}
						name="glyukoza"
					/>
					<TextField
						variant='outlined'
						label='Mochevina '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">mmol/l</InputAdornment> }}
						error={!!errors.mochevina}
						helperText={errors.mochevina ? `${errors.mochevina.message}` : ''}
						{...register('mochevina')}
						name="mochevina"
					/>
					<TextField
						variant='outlined'
						label='Kreatin '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">mmol/l</InputAdornment> }}
						error={!!errors.kreatin}
						helperText={errors.kreatin ? `${errors.kreatin.message}` : ''}
						{...register('kreatin')}
						name="kreatin"
					/>
					<TextField
						variant='outlined'
						label='Alaninaminotransferaza (ALT) '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">Ed/l</InputAdornment> }}
						error={!!errors.alaninaminotransferaza}
						helperText={errors.alaninaminotransferaza ? `${errors.alaninaminotransferaza.message}` : ''}
						{...register('alaninaminotransferaza')}
						name="alaninaminotransferaza"
					/>
					<TextField
						variant='outlined'
						label='Aspartataminotransferaza (AST) '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">Ed/l</InputAdornment> }}
						error={!!errors.aspartataminotransferza}
						helperText={errors.aspartataminotransferza ? `${errors.aspartataminotransferza.message}` : ''}
						{...register('aspartataminotransferza')}
						name="aspartataminotransferza"
					/>
					<TextField
						variant='outlined'
						label='Gammagglutamilransferza (GGD) '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">Ed/l</InputAdornment> }}
						error={!!errors.gammagglutamilransferza}
						helperText={errors.gammagglutamilransferza ? `${errors.gammagglutamilransferza.message}` : ''}
						{...register('gammagglutamilransferza')}
						name="gammagglutamilransferza"
					/>
					<TextField
						variant='outlined'
						label='laktatdegidrogenaza (LDG) '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">Ed/l</InputAdornment> }}
						error={!!errors.laktatdegidrogenaza}
						helperText={errors.laktatdegidrogenaza ? `${errors.laktatdegidrogenaza.message}` : ''}
						{...register('laktatdegidrogenaza')}
						name="laktatdegidrogenaza"
					/>
					<TextField
						variant='outlined'
						label='A_amilaza '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">Ed/l</InputAdornment> }}
						error={!!errors.a_amilaza}
						helperText={errors.a_amilaza ? `${errors.a_amilaza.message}` : ''}
						{...register('a_amilaza')}
						name="a_amilaza"
					/>
					<TextField
						variant='outlined'
						label='Ishqoriy fostataza '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">Ed/l</InputAdornment> }}
						error={!!errors.ishqoriy_fostataza}
						helperText={errors.ishqoriy_fostataza ? `${errors.ishqoriy_fostataza.message}` : ''}
						{...register('ishqoriy_fostataza')}
						name="ishqoriy_fostataza"
					/>

					<TextField
						variant='outlined'
						label='Tmol '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">mmol/l</InputAdornment> }}
						error={!!errors.kaliy}
						helperText={errors.kaliy ? `${errors.kaliy.message}` : ''}
						{...register('kaliy')}
						name="kaliy"
					/>
					<TextField
						variant='outlined'
						label='Kaltsiy '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">mmol/l</InputAdornment> }}
						error={!!errors.kaltsiy}
						helperText={errors.kaltsiy ? `${errors.kaltsiy.message}` : ''}
						{...register('kaltsiy')}
						name="kaltsiy"
					/>
					<TextField
						variant='outlined'
						label='Temir '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">mmol/l</InputAdornment> }}
						error={!!errors.temir}
						helperText={errors.temir ? `${errors.temir.message}` : ''}
						{...register('temir')}
						name="temir"
					/>
					<TextField
						variant='outlined'
						label='Fosfor '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">mmol/l</InputAdornment> }}
						error={!!errors.fosfor}
						helperText={errors.fosfor ? `${errors.fosfor.message}` : ''}
						{...register('fosfor')}
						name="fosfor"
					/>
					<TextField
						variant='outlined'
						label='Xlor '
						color='success'
						InputProps={{ endAdornment: <InputAdornment position="start">mmol/l</InputAdornment> }}
						error={!!errors.xlor}
						helperText={errors.xlor ? `${errors.xlor.message}` : ''}
						{...register('xlor')}
						name="xlor"
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

export default BioximikForm