import React from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { IpropsRegister } from '../../../../common/types/auth';
import AppButton from '../../../app-button';
import { useStyles } from './styles';

const RegisterPage: React.FC<IpropsRegister> = (props: IpropsRegister): JSX.Element => {
	const { navigate, register, errors } = props
	const classes = useStyles()
	return (
		<>
			<Typography variant="h3" component="h4" sx={{ textAlign: 'center' }}>
				Ro`yxatdan o`tish
			</Typography>
			<Typography variant="body2" sx={{ textAlign: 'center' }}>
				Ro`yxatdan o`tish uchun o`zingizning malumotlaringizni kiriting`
			</Typography>
			<TextField
				error={!!errors.name}
				fullWidth margin='normal'
				type='text'
				label="Ism"
				variant="outlined"
				placeholder='Ismingizni kiriting'
				helperText={errors.name ? `${errors.name.message}` : ''}
				{...register('name')}
			/>


			<TextField
				error={!!errors.username}
				fullWidth margin='normal'
				type='text'
				label="Taxallus"
				variant="outlined"
				placeholder='Taxallusingizni kiriting'
				helperText={errors.username ? `${errors.username.message}` : ''}
				{...register('username')}
			/>


			<TextField
				error={!!errors.email}
				fullWidth
				margin='normal'
				type='email'
				label="Email"
				variant="outlined"
				placeholder='Elekton manzilingizni kiriting'
				helperText={errors.email ? `${errors.email.message}` : ''}
				{...register('email')}
			/>

			<TextField
				error={!!errors.password}
				fullWidth
				margin='normal'
				type='password'
				label="Password"
				variant="outlined"
				placeholder='Maxfiy ko`dingizni kiriting'
				helperText={errors.password ? `${errors.password.message}` : ''}
				{...register('password')}
			/>

			<TextField
				error={!!errors.confirmPassword}
				fullWidth
				margin='normal'
				type='password'
				label="Password"
				variant="outlined"
				placeholder='Maxfiy ko`dingizni takroran kiriting'
				helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
				{...register('confirmPassword')}
			/>

			<AppButton type='submit' sx={{ width: '80%', marginTop: 2, marginBottom: 1 }} variant="contained" >Ro`yxatdan o`tish</AppButton>
			<Typography variant="body2" >
				Ro`yhatdan o`tganmisiz?<span className={classes.incitingText} onClick={() => navigate('/login')}>Kirish</span>
			</Typography>
		</>
	)
}

export default RegisterPage