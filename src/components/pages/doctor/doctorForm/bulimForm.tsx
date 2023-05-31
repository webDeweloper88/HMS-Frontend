import { Box, Grid, TextField, InputAdornment, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useStyles } from './style';
import { IpropsBemorRegister } from '../../../../common/types/auth';



const DoctorForm: React.FC<IpropsBemorRegister> = (props: IpropsBemorRegister): JSX.Element => {
    const { register, errors } = props
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <Grid container margin={'auto'}>
                <Grid item xs={12}>
                    <TextField
                        variant='outlined'
                        label='FIO'
                        color='success'
                        error={!!errors.fio}
                        helperText={errors.fio ? `${errors.fio.message}` : ''}
                        {...register('fio')}
                        name="fio"
                    >
                    </TextField>

                    <TextField
                        variant="outlined"
                        color='success'
                        label="Hudud"
                        error={!!errors.mutaxassislik}
                        helperText={errors.mutaxassislik ? `${errors.mutaxassislik.message}` : ''}
                        {...register('mutaxassislik')}
                        name='mutaxassislik'
                    />
                    <TextField
                        type='number'
                        variant='outlined'
                        label='departmentId'
                        color='success'
                        error={!!errors.departmentId}
                        helperText={errors.departmentId ? `${errors.departmentId.message}` : ''}
                        {...register('departmentId')}
                        name='departmentId'
                    />
                </Grid>

                <Box sx={{ display: 'flex', gap: 5, justifyContent: "center", width: '100%', margin: "25px 0px" }}>
                    <Button variant='contained' color='info' size='large' type='submit'>submit</Button>
                    <Button variant='contained' color='info' size='large' type='reset'>reset</Button>
                </Box>

            </Grid >
        </div >
    )
}

export default DoctorForm