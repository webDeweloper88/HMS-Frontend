import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            pageContent: {
                background: `${colors.pageHeaderColor.DEFAULT} !important`,
                margin: theme.spacing(0),
                padding: theme.spacing(3),

            },


        }
    )
})