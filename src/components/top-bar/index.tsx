import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { useAppSelector } from '../../utils/hook'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ColorModeContext } from "../../theme";
import { useStyles } from './styles';
// import FlexBetween from "../flex-between";

const TopBarComponent = () => {
	const theme = useTheme()
	const colorMode: any = useContext(ColorModeContext)
	const classes = useStyles()
	const user = useAppSelector((state) => state.auth.user)
	console.log(user)



	return (
		<Box className={classes.root}>

			{/* column1 */}
			<Grid>{user && user.username ? `Welcome, ${user.username}` : 'Welcome'}</Grid>

			{/* column 2 */}
			<Box display='flex' alignItems='center'>

				{/*user actions */}
				<Grid onClick={colorMode.toggleColorMode} className={classes.iconActions}>
					<IconButton className={classes.icon}>
						{theme.palette.mode === 'dark' ? (<DarkModeIcon />) : (<LightModeIcon />)}
					</IconButton>
					<IconButton>
						<NotificationsNoneIcon />
					</IconButton>
				</Grid>

				{/* Search block */}
				<Grid className={classes.searchblock}

				>
					<IconButton className={classes.searchIconb}  >
						<SearchIcon />
					</IconButton>
					<InputBase className={classes.searchinput} placeholder='Qidiruv' />
				</Grid>

			</Box>

		</Box >
	)
}

export default TopBarComponent