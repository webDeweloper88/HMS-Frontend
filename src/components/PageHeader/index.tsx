import { Card, Paper, Typography, makeStyles, Theme } from '@mui/material'
import React from 'react'
import { useStyles } from './style'

interface PageHeaderProps {
    title: string;
    subTitle: string;
    icon: React.ReactNode;
}


const PageHeader = (props: PageHeaderProps) => {
    const classes = useStyles()
    const { title, subTitle, icon } = props
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.title}>
                    <Typography
                        variant='h6'
                        component='div'
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        component='div'
                    >
                        {subTitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader