import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, InputBase, Grid, Box, Paper, IconButton, } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './style';
import { Search } from '@mui/icons-material';
import Button from '../../../btn';
import { useAppDispatch, useAppSelector } from '../../../../utils/hook';
import { bioximikAll } from '../../../../store/thunks/assets';

const BioximikTable = (props: any) => {
    const { setOpenPopup, openPopup } = props;
    const classes = useStyles();
    const bioximikData = useAppSelector(state => state.bioximik.bio);


    const handlePrint = () => {
        window.print();
    }
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(bioximikAll());
    }, [dispatch]);


    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };
    const filteredBioData = bioximikData.filter((bio: any) =>
        bio.bemor.fio.toLowerCase().includes(searchValue.toLowerCase())
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
                {filteredBioData.map((bio) => (
                    <React.Fragment key={bio.id}>
                        <Grid item xs={12}>
                            <Accordion>
                                <AccordionSummary sx={{ backgroundColor: 'primary.dark' }}>
                                    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                        <span>Id:{bio.id}</span>
                                        <span>Bemor: {bio.bemor.fio} </span>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <Grid container margin={'auto'} sx={{ rowGap: '25px' }}>
                                        <Grid item sm={12} md={6} lg={4} >
                                            <Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Bioximik Id:</b> <span>{bio.id}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Bo`lim` Id:</b> <span>{bio.department.id}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Bo`lim nomi`:</b> <span>{bio.department.bolim_nomi}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Bemor Id:</b> <span>{bio.bemor.id}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>Bemor F.I.O:</b> <span>{bio.bemor.fio}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>albumin:</b> <span>{bio.albumin}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>xolesterin_umumiy:</b> <span>{bio.xolesterin_umumiy}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>trigliseridlar:</b> <span>{bio.trigliseridlar}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>glyukoza:</b> <span>{bio.glyukoza}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>kreatin:</b> <span>{bio.kreatin}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>alaninaminotransferaza:</b> <span>{bio.alaninaminotransferaza}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>aspartataminotransferza:</b> <span>{bio.aspartataminotransferza}</span>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={12} md={6} lg={4} >
                                            <Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>gammagglutamilransferza:</b> <span>{bio.aspartataminotransferza}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>gammagglutamilransferza:</b> <span>{bio.aspartataminotransferza}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>laktatdegidrogenaza:</b> <span>{bio.laktatdegidrogenaza}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>a_amilaza:</b> <span>{bio.a_amilaza}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>ishqoriy_fostataza:</b> <span>{bio.ishqoriy_fostataza}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>tmol:</b> <span>{bio.tmol}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>kaliy:</b> <span>{bio.kaliy}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>kaltsiy:</b> <span>{bio.kaltsiy}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>temir:</b> <span>{bio.temir}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>fosfor:</b> <span>{bio.fosfor}</span>
                                                </Box>
                                                <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                                    <b>xlor:</b> <span>{bio.xlor}</span>
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

export default BioximikTable;