import { Box, Grid, TextField, InputAdornment, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useStyles } from './style';
import { IpropsBemorRegister } from '../../../../common/types/auth';



const BulimForm: React.FC<IpropsBemorRegister> = (props: IpropsBemorRegister): JSX.Element => {
    const { register, errors } = props
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant='outlined'
                        label='bulimNomi'
                        color='success'
                        error={!!errors.bulimNomi}
                        helperText={errors.bulimNomi ? `${errors.bulimNomi.message}` : ''}
                        {...register('bulimNomi')}
                        name="bulimNomi"
                    >
                    </TextField>

                    <TextField
                        variant="outlined"
                        color='success'
                        label="Hudud"
                        error={!!errors.hudud}
                        helperText={errors.hudud ? `${errors.hudud.message}` : ''}
                        {...register('hudud')}
                        name='hudud'
                    />
                    <TextField
                        variant="outlined"
                        color='success'
                        label="muassasa"
                        error={!!errors.muassasa}
                        helperText={errors.muassasa ? `${errors.muassasa.message}` : ''}
                        {...register('muassasa')}
                        name='muassasa'
                    />
                    <TextField
                        variant="outlined"
                        label="telefon"
                        color='success'
                        error={!!errors.telefon}
                        helperText={errors.telefon ? `${errors.telefon.message}` : ''}
                        {...register('telefon')}
                        name='telefon'
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="bulimBoshligi"
                        variant="outlined"
                        color='success'
                        error={!!errors.bulimBoshligi}
                        helperText={errors.bulimBoshligi ? `${errors.bulimBoshligi.message}` : ''}
                        {...register('bulimBoshligi')}
                        name='bulimBoshligi'
                    />
                    <TextField
                        variant='outlined'
                        label='Doctorniny F.I.O kiriting'
                        color='success'
                        error={!!errors.fio}
                        helperText={errors.fio ? `${errors.fio.message}` : ''}
                        {...register('fio')}
                        name='fio'
                    />
                    <TextField
                        variant='outlined'
                        label='Doctorning mutaxasisligi'
                        color='success'
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

export default BulimForm