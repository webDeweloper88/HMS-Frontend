import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            searchblock: {
                display: 'flex',
                borderRadius: '10px',
                marginLeft: '25px',
                paddingLeft: '5px',
                backgroundColor: `${colors.primary.DEFAULT}`,
                minHeight: '50px',
                minWidth: '30%'
            },
            inputSearch: {
                minHeight: '0px'
            },
        }
    )
})