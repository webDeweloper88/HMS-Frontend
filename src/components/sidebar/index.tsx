import React, { useEffect, useState } from 'react'
import { useStyles } from './style'
import { Box, Drawer, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme, colors } from '@mui/material'
import {
	ChevronLeftOutlined,
	ChevronRightOutlined,
	LoginOutlined,
	LogoutOutlined
} from '@mui/icons-material';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../flex-between';
import { navMenu } from '../moks/navigate';
import { tokens } from '../../theme';
import Logo from '../../assets/images/sidebar/logo.svg'

const SidebarComponet = (props: any) => {
	const [activ, setActiv] = useState('')
	const { isNonmobile, drawerWidth, isOpen, setIsOpen } = props
	const { pathname } = useLocation()
	const classes = useStyles()
	const navigate = useNavigate()
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	useEffect(() => {
		setActiv(pathname.substring(1))
	}, [pathname])

	const renderNavMenu = navMenu.map((element): JSX.Element => {
		return (
			<ListItem key={element.id} >
				<ListItemButton onClick={() => navigate(`${element.path}`)} className={classes.navItem}>
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
										Demo
									</Typography>
								</Box>
								{isNonmobile && (
									<IconButton onClick={() => setIsOpen(!isOpen)}>
										<ChevronLeftOutlined />
									</IconButton>
								)}
							</FlexBetween>
						</Box>
						<List className={classes.test}
							sx={{ marginBottom: '55px' }}
						>
							{renderNavMenu}
						</List>
					</Box>
					<Box width='100%' >
						<List >
							<ListItem  >
								<ListItemButton className={classes.navItem} sx={{ padding: 0 }}>
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

export default SidebarComponet