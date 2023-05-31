import React, { FC, useEffect, useState } from 'react'
import { useStyles } from './style'
import { Box, Drawer, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme, colors } from '@mui/material'
import {
	LoginOutlined,
	LogoutOutlined
} from '@mui/icons-material';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../flex-between';
import { navMenu } from '../moks/navigate';
import { tokens } from '../../theme';
import Logo from '../../assets/images/sidebar/logo.svg'
import { ISidebarProps } from "../../common/types/sidebar";

const SidebarComponent: FC<ISidebarProps> = (props: ISidebarProps): JSX.Element => {
	const [active, setActive] = useState('')
	const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props
	const { pathname } = useLocation()
	const classes = useStyles()
	const navigate = useNavigate()
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	useEffect(() => {
		setActive(pathname)
	}, [pathname])

	const renderNavMenu = navMenu.map((element): JSX.Element => {
		return (
			<ListItem key={element.id} >
				<ListItemButton onClick={() => navigate(`${element.path}`)}
					className={active === element.path ? `${classes.navItem} ${classes.active}` : classes.navItem}
				>
					<ListItemIcon  >
						{element.icon}
					</ListItemIcon>
					<ListItemText>
						<Typography variant="body1">
							{element.name}
						</Typography>
					</ListItemText>
				</ListItemButton>
			</ListItem>
		)
	})


	return (
		<Box component='nav'>
			{isOpen && (
				<Drawer
					open={isOpen}
					onClose={() => setIsOpen(false)}
					variant='persistent'
					anchor='left'
					sx={{
						width: drawerWidth,
						'& .MuiDrawer-paper': {
							color: theme.palette.secondary.main,
							backgroundColor: theme.palette.primary.main,
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					<Box className={classes.navBlock}>
						<Box>
							<FlexBetween>
								<Box className={classes.brand}>
									<img src={Logo} alt="Logotip sayta" />
									<Typography
										variant='h1'
										className={classes.brandTitle}
									>
										HMS
									</Typography>
								</Box>
							</FlexBetween>
						</Box>
						<List
							sx={{ marginBottom: '55px' }}
						>
							{renderNavMenu}
						</List>
					</Box>
					<Box width='100%' >
						<List >
							<ListItem  >
								<ListItemButton className={classes.navItem} >
									<ListItemIcon>
										<LoginOutlined />
									</ListItemIcon>
									<ListItemText>
										<Typography>Chiqish</Typography>
									</ListItemText>
								</ListItemButton>
							</ListItem>
						</List>
					</Box>
				</Drawer>
			)}
		</Box >
	)
}

export default SidebarComponent