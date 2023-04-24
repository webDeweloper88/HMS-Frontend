import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react'
import style from './style.module.css';
import { IpropsLogin } from '../../../common/types/auth';


const LoginPage: React.FC<IpropsLogin> = (props: IpropsLogin): JSX.Element => {
	const { setEmail, setPassword, navigate } = props
	return (
		<>
			<Typography variant="h2" component="h3">
				Kirish
			</Typography>
			<Typography variant="body2" >
				Login va maxfiy ko`dingizni kiriting`
			</Typography>
			<TextField onChange={(e) => setEmail(e.target.value)} fullWidth margin='normal' type='email' label="Email" variant="outlined" placeholder='Elekton manzilingizni kiriting' />
			<TextField onChange={(e) => setPassword(e.target.value)} fullWidth margin='normal' type='password' label="pasword" variant="outlined" placeholder='Maxfiy ko`dingizni kiriting' />
			<Button type='submit' sx={{ width: '80%', marginTop: 2, marginBottom: 1 }} variant="contained">kirish</Button>
			<Typography variant="body2" >
				Ro`yhatdan o`tmaganmisiz?<span className='test' onClick={() => navigate('/register')}>Ro`yhatdan o`tish</span>
			</Typography>
		</>
	)
}

export default LoginPage