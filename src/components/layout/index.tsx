import React, { useState } from 'react'
import { ILayout } from '../../common/types/layout'
import TopBarComponent from '../top-bar'
import { useLocation } from 'react-router-dom'
import { Box, useMediaQuery } from '@mui/material';
import SidebarComponet from '../sidebar';
import { useStyles } from '../sidebar/style';


const LayoutComponent = ({ children }: ILayout) => {
	const [isOpen, setIsOpen] = useState(true)
	const location = useLocation()
	const isNonMobile = useMediaQuery('(min-width:600px)')
	const classes = useStyles()
	return (
		location.pathname === '/login' || location.pathname === '/register' ? (
			<>{children}</>
		) : (
			<>
				<Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%' justifyContent='space-between'>
					<SidebarComponet
						isNonmobile={isNonMobile}
						drawerWidth='250'
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>
					<Box className={classes.mainSection}>
						<TopBarComponent />
						{children}
					</Box>
				</Box >
			</>
		)
	)
}

export default LayoutComponent