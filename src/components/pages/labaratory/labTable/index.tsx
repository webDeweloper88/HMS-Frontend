import React, { useEffect, useState } from 'react';
import { TableContainer, InputBase, Grid, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './style';
import { Search } from '@mui/icons-material';
import Button from '../../../btn';
import { useAppDispatch, useAppSelector } from '../../../../utils/hook';
import { labaratoriesAll } from '../../../../store/thunks/assets';

const LabaratoryTable = (props: any) => {
    const { setOpenPopup, openPopup } = props;
    const classes = useStyles();
    const labData = useAppSelector(state => state.labaratory.lab);


    const handlePrint = () => {
        window.print();
    }
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(labaratoriesAll());
    }, [dispatch]);


    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };
    const filteredLabData = labData.filter((lab: any) =>
        lab.bemor.fio.toLowerCase().includes(searchValue.toLowerCase())
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
                            text="Doctorni ro`yxatdan o`tkazish"
                            size='large'
                            onClick={() => { setOpenPopup(!openPopup) }}
                        >
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{ border: "1px solid #3c3c3c" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Labaratoriya Id raqami</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Bo`limn Id</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Bo`limning nomi</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Bemorning Id raqami</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Bemorning F.I.O</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Kasallik</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Plazma Krovi</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Pozoboy_moche</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Utreney_moche</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Stuchnoy_moche</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Stuchnoy_moche</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>sana</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Taxrirlash</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredLabData.map((lab: any) => (
                            <TableRow key={lab.id}>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{lab.id}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{lab.department.id}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{lab.department.bolim_nomi}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{lab.bemor.id}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{lab.bemor.fio}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{lab.kasallik}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{lab.plazma_krovi}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{lab.pozoboy_moche}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{lab.utreney_moche}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{lab.stuchnoy_moche}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{lab.selnaya_kapilyarnaya_krov}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{lab.sana}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>
                                    <IconButton >
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

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

export default LabaratoryTable;