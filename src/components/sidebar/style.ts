import { makeStyles } from '@mui/styles'
import { Theme } from "@mui/material";
import { tokens } from '../../theme'

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode)
	return (
		{
			root: {
				display: 'flex',
				width: '100%'
			},
			mainSection: {
				display: 'flex',
				width: "90%",
				flexDirection: 'column',
				justifyContent: 'center'
			},

			navBlock: {
				width: '100%',
				borderBottom: `1px solid ${colors.borderColor}`
			},
			brand: {
				display: 'flex',
				alignItems: 'center',
				gap: '10px',
				padding: '30px 15px',
				cursor: 'pointer'
			},
			brandTitle: {
				color: `${theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT}`
			},
			test: {
				marginBottom: '58px',

			},
			navItem: {
				color: 'red',
				'&:hover': {
					backgroundColor: '#1900D5 !important',
					color: "#FFF",
					borderRadius: '4px',
					'& .MuiSvgIcon-root': {
						color: `${colors.white.DEFAULT} !important`,
					}
				}
			},

		}
	)
})

