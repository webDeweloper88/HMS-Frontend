import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            root: {

                '& .MuiFormControl-root': {
                    width: "95%",
                    margin: theme.spacing(2),
                    '& .MuiOutlinedInput-root': {
                        //color: 'red',
                        '&:hover fieldset': {
                            borderColor: `${colors.blue} `,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: `${colors.blue}`,

                        },
                        '& .MuiInputLabel-outlined': {
                            color: 'white',
                        },
                    },
                },
            }
        }
    )
})