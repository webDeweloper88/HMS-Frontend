import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)

    return (
        {
            root: {
                background: `${colors.pageHeaderColor.DEFAULT} !important`,
            },
            pageHeader: {
                padding: theme.spacing(4),
                display: 'flex',
                marginBottom: theme.spacing(0)
            },
            pageIcon: {
                display: 'inline-block',
                padding: theme.spacing(2),
                background: `${colors.primary[400]} !important`,
                borderRadius: '12px'

            },
            title: {
                marginLeft: theme.spacing(2),
                marginTop: theme.spacing(1),

                '& .MuiTypography-subtitle2': {
                    opacity: '0.6'
                }


            }
        }
    )
})
