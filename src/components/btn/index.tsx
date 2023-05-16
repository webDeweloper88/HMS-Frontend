import React from 'react'
import { Button as MuiButton, makeStyles } from "@mui/material";

import { useStyles } from './style';

export default function Button(props: any) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"
            }
            size={size || "small"}
            color={color || 'secondary'}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}>
            {text}
        </MuiButton>
    )
}