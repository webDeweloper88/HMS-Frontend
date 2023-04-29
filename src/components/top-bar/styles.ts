import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode)
	return (
		{
			root: {
				position: 'static',
				background: `${colors.primary.DEFAULT}`,
				borderBottom: `1px solid ${colors.borderColor}`,
				boxShadow: 'none !important'
			},
			toolBar: {
				justifyContent: 'space-between',
				padding: '25px 45px'
			},
			menuIcon: {
				marginRight: '10px',
				cursor: 'pointer'
			},
			iconActions: {
				paddingRight: '37px',
				marginRight: '10px',
				paddingTop: '0px',
				borderRight: `1px solid ${colors.borderColor}`

			},
			icon: {
				marginLeft: '45px'
			},
			searchblock: {
				display: 'flex',
				borderRadius: '10px',
				marginLeft: '25px',
				paddingLeft: '5px',
				backgroundColor: `${colors.primary[600]}`,
				maxHeight: '45px'
			},
			searchIconb: {
				'&:hover': {
					backgroundColor: 'transparent !important',
				},
			},
			searchinput: {
				padding: '12px',
				fontFamily: 'Roboto,sans-serif'
			}
		}
	)
})