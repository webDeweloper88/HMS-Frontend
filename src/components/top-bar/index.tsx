import { AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme } from '@mui/material'
import React, { FC, useContext } from 'react'
import { useAppSelector } from '../../utils/hook'
import { LightMode, DarkMode, Search, MenuOutlined } from '@mui/icons-material';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ColorModeContext } from "../../theme";
import { useStyles } from './styles';
import FlexBetween from '../flex-between';
// import FlexBetween from "../flex-between";
import { ITopBarProps } from "../../common/types/top-bar";

const TopBarComponent: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
	const theme = useTheme()
	const colorMode: any = useContext(ColorModeContext)
	const classes = useStyles()
	const user = useAppSelector((state) => state.auth.user)
	const { isOpen, setIsOpen } = props



	return (
		<AppBar className={classes.root} position='static' >
			<Toolbar className={classes.toolBar}>
				<FlexBetween>
					<MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}></MenuOutlined>
					<Typography variant='h3'>Xush kelibsiz {sessionStorage.getItem('name')}</Typography>
				</FlexBetween>
				<Box display='flex' alignItems='center'>
					{/*user actions */}
					<Grid onClick={colorMode.toggleColorMode} className={classes.iconActions}>
						<IconButton className={classes.icon}>
							{theme.palette.mode === 'dark' ? (<DarkMode />) : (<LightMode />)}
						</IconButton>
						<IconButton>
							<NotificationsNoneIcon />
						</IconButton>
					</Grid>
					{/* Search block */}
					<Grid className={classes.searchblock}
					>
						<IconButton className={classes.searchIconb}  >
							<Search />
						</IconButton>
						<InputBase className={classes.searchinput} placeholder='Qidiruv' />
					</Grid>

				</Box>
			</Toolbar>
		</AppBar >
		// <Box className={classes.root}>

		// 	{/* column1 */}
		// 	<Grid>{user && user.username ? `Welcome, ${user.username}` : 'Welcome'}</Grid>

		// 	{/* column 2 */}
		// <Box display='flex' alignItems='center'>

		// 	{/*user actions */}
		// 	<Grid onClick={colorMode.toggleColorMode} className={classes.iconActions}>
		// 		<IconButton className={classes.icon}>
		// 			{theme.palette.mode === 'dark' ? (<DarkModeIcon />) : (<LightModeIcon />)}
		// 		</IconButton>
		// 		<IconButton>
		// 			<NotificationsNoneIcon />
		// 		</IconButton>
		// 	</Grid>

		// 	{/* Search block */}
		// 	<Grid className={classes.searchblock}

		// 	>
		// 		<IconButton className={classes.searchIconb}  >
		// 			<SearchIcon />
		// 		</IconButton>
		// 		<InputBase className={classes.searchinput} placeholder='Qidiruv' />
		// 	</Grid>

		// </Box>

		// </Box >
	)
}

export default TopBarComponent