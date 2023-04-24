import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { IpropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IpropsRegister> = (props: IpropsRegister): JSX.Element => {
	const { setEmail, setFirstName, setPassword, setRepeatPassword, setUsername, navigate } = props
	return (
		<>
			<Typography variant="h3" component="h4" sx={{ textAlign: 'center' }}>
				Ro`yxatdan o`tish
			</Typography>
			<Typography variant="body2" sx={{ textAlign: 'center' }}>
				Ro`yxatdan o`tish uchun o`zingizning malumotlaringizni kiriting`
			</Typography>
			<TextField onChange={(e) => setFirstName(e.target.value)} fullWidth margin='normal' type='text' label="Ism" variant="outlined" placeholder='Ismingizni kiriting' />
			<TextField onChange={(e) => setUsername(e.target.value)} fullWidth margin='normal' type='text' label="Taxallus" variant="outlined" placeholder='Taxallusingizni kiriting' />
			<TextField onChange={(e) => setEmail(e.target.value)} fullWidth margin='normal' type='email' label="Email" variant="outlined" placeholder='Elekton manzilingizni kiriting' />
			<TextField onChange={(e) => setPassword(e.target.value)} fullWidth margin='normal' type='password' label="Password" variant="outlined" placeholder='Maxfiy ko`dingizni kiriting' />
			<TextField onChange={(e) => setRepeatPassword(e.target.value)} fullWidth margin='normal' type='password' label="Password" variant="outlined" placeholder='Maxfiy ko`dingizni takroran kiriting' />
			<Button type='submit' sx={{ width: '80%', marginTop: 2, marginBottom: 1 }} variant="contained" >Ro`yxatdan o`tish</Button>
			<Typography variant="body2" >
				Ro`yhatdan o`tganmisiz?<span className='test' onClick={() => navigate('/login')}>Kirish</span>
			</Typography>
		</>
	)
}

export default RegisterPage