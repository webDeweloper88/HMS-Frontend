import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            root: {
                margin: theme.spacing(0.5),
                background: 'blue'

            },
            label: {
                textTransform: 'none',

            }
        }
    )
})