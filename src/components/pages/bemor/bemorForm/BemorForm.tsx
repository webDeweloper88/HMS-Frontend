import { Box, Grid, TextField, InputAdornment, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useStyles } from './style';
import { IpropsBemorRegister } from '../../../../common/types/auth';

const initialFValues = {
    fio: '',
    jinsi: '',
    ish_joyi: '',
    manzili: '',
    qayerdan_yuborilgan: '',
    tugilgan_sana: '',
    buyi: '',
    vazni: '',
    tana_xarorati: '',
    yuborilgan_tashxis: '',
    shoshilinch_keltirilgan: '',
    qanday_transportda: '',
}
const gender = [

    {
        value: 'Erkak',
        label: 'Erkak',
    },
    {
        value: 'Ayol',
        label: 'Ayol',
    },

];
const currencies = [
    {
        value: 'HA',
        label: 'Ha',
    },
    {
        value: 'YO`Q',
        label: 'Yo`q',
    },

];
const IsTransport = [

    {
        value: 'Shaxsiy transportda',
        label: 'Shaxsiy transportda',
    },
    {
        value: 'Tez yordam mashinasida',
        label: 'Tez yordam mashinasida',
    },
    {
        value: 'Taksida',
        label: 'Taksida',
    },

];

const BemorForm: React.FC<IpropsBemorRegister> = (props: IpropsBemorRegister): JSX.Element => {
    const { register, errors } = props
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
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
                        fullWidth
                        select
                        label="Jinsi"
                        color='success'
                        SelectProps={{
                            native: true,

                        }}
                        error={!!errors.jinsi}
                        helperText={errors.jinsi ? `${errors.jinsi.message}` : ''}
                        {...register('jinsi')}
                        name='jinsi'
                    >
                        {gender.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        label="Tug`ilgan sanasi"
                        type='date'
                        color='success'
                        InputLabelProps={{ shrink: true }}
                        helperText={errors.tugilgan_sana ? `${errors.tugilgan_sana.message}` : ''}
                        {...register('tugilgan_sana')}
                        name='tugilgan_sana'

                    />
                    <TextField
                        variant="outlined"
                        color='success'
                        label="Bo`yi"
                        InputProps={{ endAdornment: <InputAdornment position="start">Sm</InputAdornment> }}
                        error={!!errors.buyi}
                        helperText={errors.buyi ? `${errors.buyi.message}` : ''}
                        {...register('buyi')}
                        name='buyi'
                    />
                    <TextField
                        variant="outlined"
                        color='success'
                        label="Vazni"
                        InputProps={{ endAdornment: <InputAdornment position="start">Kg</InputAdornment> }}
                        error={!!errors.vazni}
                        helperText={errors.vazni ? `${errors.vazni.message}` : ''}
                        {...register('vazni')}
                        name='vazni'
                    />
                    <TextField
                        variant="outlined"
                        label="Tana xarorati"
                        color='success'
                        error={!!errors.tana_xarorati}
                        helperText={errors.tana_xarorati ? `${errors.tana_xarorati.message}` : ''}
                        {...register('tana_xarorati')}
                        name='tana_xarorati'
                    />

                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Manzili"
                        variant="outlined"
                        color='success'
                        error={!!errors.manzili}
                        helperText={errors.manzili ? `${errors.manzili.message}` : ''}
                        {...register('manzili')}
                        name='manzili'
                    />

                    <TextField
                        variant='outlined'
                        label='Ish joyi'
                        color='success'
                        error={!!errors.ish_joyi}
                        helperText={errors.ish_joyi ? `${errors.ish_joyi.message}` : ''}
                        {...register('ish_joyi')}
                        name='ish_joyi'

                    >
                    </TextField>
                    <TextField
                        variant='outlined'
                        label='Qayerdan yuborilgan'
                        color='success'
                        error={!!errors.qayerdan_yuborilgan}
                        helperText={errors.qayerdan_yuborilgan ? `${errors.qayerdan_yuborilgan.message}` : ''}
                        {...register('qayerdan_yuborilgan')}
                        name='qayerdan_yuborilgan'
                    >
                    </TextField>

                    <TextField
                        variant='outlined'
                        label='Yuborilgan tashxis'
                        color='success'
                        error={!!errors.yuborilgan_tashxis}
                        helperText={errors.yuborilgan_tashxis ? `${errors.yuborilgan_tashxis.message}` : ''}
                        {...register('yuborilgan_tashxis')}
                        name='yuborilgan_tashxis'
                    />
                    <TextField
                        select
                        label="Shosililinch keltirilgan"
                        color='success'
                        SelectProps={{ native: true }}
                        error={!!errors.shoshilinch_keltirilgan}
                        helperText={errors.shoshilinch_keltirilgan ? `${errors.shoshilinch_keltirilgan.message}` : ''}
                        {...register('shoshilinch_keltirilgan')}
                        name='shoshilinch_keltirilgan'

                    >{currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                    </TextField>
                    <TextField
                        select
                        label="qanday_transportda"
                        SelectProps={{ native: true }}
                        color='success'
                        error={!!errors.qanday_transportda}
                        helperText={errors.qanday_transportda ? `${errors.qanday_transportda.message}` : ''}
                        {...register('qanday_transportda')}
                        name='qanday_transportda'
                    >{IsTransport.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant='outlined'
                        label='Qabulxona tashxisi'
                        color='success'
                        error={!!errors.qabulxona_tashxisi}
                        helperText={errors.qabulxona_tashxisi ? `${errors.qabulxona_tashxisi.message}` : ''}
                        {...register('qabulxona_tashxisi')}
                        name='qabulxona_tashxisi'
                    ></TextField>
                </Grid>
                <Box sx={{ display: 'flex', gap: 5, justifyContent: "center", width: '100%', margin: "25px 0px" }}>
                    <Button variant='contained' color='info' size='large' type='submit'>submit</Button>
                    <Button variant='contained' color='info' size='large' type='reset'>reset</Button>
                </Box>

            </Grid >
        </div >
    )
}

export default BemorForm