import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode)
	return (
		{
			root: {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '32px 24px',
				background: colors.primary.DEFAULT,
				maxHeight: '95px',
				borderBottom: `1px solid ${colors.borderColor}`
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