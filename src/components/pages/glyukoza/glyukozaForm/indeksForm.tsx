import { Box, Grid, TextField, InputAdornment, Button, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useStyles } from './style';
import { IpropsBemorRegister } from '../../../../common/types/auth';



const GlyukozaForm: React.FC<IpropsBemorRegister> = (props: IpropsBemorRegister): JSX.Element => {
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
						label='xona'
						color='success'
						error={!!errors.xona}
						helperText={errors.xona ? `${errors.xona.message}` : ''}
						{...register('xona')}
						name="xona"
					/>
					<TextField
						variant='outlined'
						label='Tibbiy karta №'
						color='success'

						error={!!errors.tibbiy_karta}
						helperText={errors.tibbiy_karta ? `${errors.tibbiy_karta.message}` : ''}
						{...register('tibbiy_karta')}
						name="tibbiy_karta"
					/>
					<TextField
						variant='outlined'
						label='Glyukoza 1 №'
						color='success'
						error={!!errors.g1}
						helperText={errors.g1 ? `${errors.g1.message}` : ''}
						{...register('g1')}
						name="g1"
					/>
					<TextField
						variant='outlined'
						label='Glyukoza 2 '
						color='success'
						error={!!errors.g2}
						helperText={errors.g2 ? `${errors.g2.message}` : ''}
						{...register('g2')}
						name="g2"
					/>
					<TextField
						variant='outlined'
						label='Glyukoza 3 '
						color='success'
						error={!!errors.g3}
						helperText={errors.g3 ? `${errors.g3.message}` : ''}
						{...register('g3')}
						name="g3"
					/>
					<TextField
						variant='outlined'
						label='Glyukoza 4'
						color='success'
						error={!!errors.g4}
						helperText={errors.g4 ? `${errors.g4.message}` : ''}
						{...register('g4')}
						name="g4"
					/>
					<TextField
						variant='outlined'
						label='Glyukoza 5'
						color='success'
						error={!!errors.g5}
						helperText={errors.g5 ? `${errors.g5.message}` : ''}
						{...register('g5')}
						name="g5"
					/>
					<TextField
						variant='outlined'
						type='date'
						label='sana'
						color='success'
						InputLabelProps={{ shrink: true }}
						error={!!errors.sana}
						helperText={errors.sana ? `${errors.sana.message}` : ''}
						{...register('sana')}
						name="sana"
					/>
				</Grid>
				<Box width={'100%'} alignContent={'center'}>
					<Typography variant='h3' sx={{ textAlign: 'center' }}>Davolash muolojalari</Typography>
				</Box>
			</Grid>
			<Box sx={{ display: 'flex', gap: 5, justifyContent: "center", width: '100%', margin: "25px 0px" }}>
				<Button variant='contained' color='info' size='large' type='submit'>submit</Button>
				<Button variant='contained' color='info' size='large' type='reset'>reset</Button>
			</Box>
		</div >
	)
}

export default GlyukozaForm