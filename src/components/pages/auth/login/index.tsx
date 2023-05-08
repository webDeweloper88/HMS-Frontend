import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react'

import { IpropsLogin } from '../../../../common/types/auth';
import { useStyles } from './styles';
import AppButton from '../../../app-button';


const LoginPage: React.FC<IpropsLogin> = (props: IpropsLogin): JSX.Element => {
	const { navigate, register, errors } = props
	const classes = useStyles()
	return (
		<>
			<Typography variant="h2" component="h3" fontSize={32}>
				Kirish
			</Typography>
			<Typography variant="body2" >
				Login va maxfiy ko`dingizni kiriting`
			</Typography>
			<TextField
				error={!!errors.email}
				fullWidth margin='normal'
				type='email'
				label="Email"
				variant="outlined"
				placeholder='Elekton manzilingizni kiriting'
				helperText={errors.email ? `${errors.email.message}` : ''}
				{...register('email')}
			/>
			<TextField
				error={!!errors.password}
				fullWidth margin='normal'
				type='password'
				label="pasword"
				variant="outlined"
				placeholder='Maxfiy ko`dingizni kiriting'
				helperText={errors.email ? `${errors.password.message}` : ''}
				{...register('password', {
					required: 'Bu maydonni to`ldirish shart',
					minLength: 6
				})}
			/>
			<AppButton type='submit' sx={{ width: '80%', marginTop: 2, marginBottom: 1 }} variant="contained">kirish</AppButton>
			<Typography variant="body2" >
				Ro`yhatdan o`tmaganmisiz?<span className={classes.incitingText} onClick={() => navigate('/register')}>Ro`yhatdan o`tish</span>
			</Typography>
		</>
	)
}

export default LoginPage