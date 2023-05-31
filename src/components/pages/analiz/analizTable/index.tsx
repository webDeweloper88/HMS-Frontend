import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, InputBase, Grid, Box, Paper, IconButton, } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './style';
import { Search } from '@mui/icons-material';
import Button from '../../../btn';
import { useAppDispatch, useAppSelector } from '../../../../utils/hook';
import { AnalizkAll } from '../../../../store/thunks/assets';

const AnalizTable = (props: any) => {
    const { setOpenPopup, openPopup } = props;
    const classes = useStyles();
    const AnalizkData = useAppSelector(state => state.analiz.analiz);


    const handlePrint = () => {
        window.print();
    }
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(AnalizkAll());
    }, [dispatch]);


    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };
    const filteredAnalizData = AnalizkData.filter((analiz: any) =>
        analiz.bemor.fio.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
        <>
            <Grid container py={5}>
                <Grid item xs={6}>
                    <Grid className={classes.searchblock}>
                        <IconButton>
                            <Search />
                        </IconButton>
                        <InputBase fullWidth placeholder="Qidiruv" className={classes.inputSearch}
                            value={searchValue}
                            onChange={handleSearchInputChange}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            color='info'
                            text="Bioximik taxlillarini ro`yxatdan o`tkazish"
                            size='large'
                            onClick={() => { setOpenPopup(!openPopup) }}
                        >
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{ gap: '15px' }}>
                {filteredAnalizData.map((analiz) => (
                    <React.Fragment key={analiz.id}>
                        <Grid item xs={12}>
                            <Accordion>
                                <AccordionSummary sx={{ backgroundColor: 'primary.dark' }}>
                                    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                        <span>Id:{analiz.id}</span>
                                        <span>Bemor: {analiz.bemor.fio} </span>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <Grid container margin={'auto'} sx={{ rowGap: '25px' }}>
                                        <Grid item sm={12} md={6} lg={4} >
                                            <Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Analiz Id:</b> <span>{analiz.id}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Bo`lim` Id:</b> <span>{analiz.department.id}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Bo`lim nomi`:</b> <span>{analiz.department.bolim_nomi}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Bemor Id:</b> <span>{analiz.bemor.id}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Bemor F.I.O:</b> <span>{analiz.bemor.fio}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>biomahsulot olingan sana:</b> <span>{analiz.sana}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Bemorning tibbiy karta raqami:</b> <span>{analiz.tibbiy_karta_Raqami}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Miqdori:</b> <span>{analiz.miqdor}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Rangi:</b> <span>{analiz.rang}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Tiniqligi:</b> <span>{analiz.tiniq}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>nisbiy_zichlik:</b> <span>{analiz.nisbiy_zichlik}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>reaksiya:</b> <span>{analiz.reaksiya}</span>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={12} md={6} lg={4} >
                                            <Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>oqsil:</b> <span>{analiz.oqsil}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>gl:</b> <span>{analiz.gl}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>glyukoza:</b> <span>{analiz.glyukoza}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>geton_tanachalari:</b> <span>{analiz.geton_tanachalari}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>qon_borligini_aniqlash_reaks:</b> <span>{analiz.qon_borligini_aniqlash_reaks}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>bilirubin:</b> <span>{analiz.bilirubin}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>urobilinoidlar:</b> <span>{analiz.urobilinoidlar}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>ot:</b> <span>{analiz.ot}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>kislotasi:</b> <span>{analiz.kislotasi}</span>
                                                </Box>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant='contained'
                            text='Chop etish'
                            color='info'
                            onClick={handlePrint}
                            style={{ marginTop: '30px' }}
                        />
                    </Box>
                </Grid>
            </Grid>

        </>
    );
};

export default AnalizTable;