import React, { useEffect, useState } from 'react';
import { TableContainer, InputBase, Grid, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './style';
import { Search } from '@mui/icons-material';
import Button from '../../../btn';
import { useAppDispatch, useAppSelector } from '../../../../utils/hook';
import { glyukozaAll } from '../../../../store/thunks/assets';

const GlyukozaTable = (props: any) => {
    const { setOpenPopup, openPopup } = props;
    const classes = useStyles();
    const glyukozaData = useAppSelector(state => state.glyukoza.gl);


    const handlePrint = () => {
        window.print();
    }
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(glyukozaAll());
    }, [dispatch]);


    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };
    const filteredGlData = glyukozaData.filter((gl: any) =>
        gl.bemor.fio.toLowerCase().includes(searchValue.toLowerCase())
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
                            text="Glyukoza taxlillarino ro`yxatdan o`tkazish"
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
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Glyukoza Id raqami</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Bo`limn Id</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Bo`limning nomi</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Bemorning Id raqami</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Bemorning F.I.O</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Xona</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Tibbiy karta №</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>glyukoza 1</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>glyukoza 2</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>glyukoza 3</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>glyukoza 4</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>glyukoza 5</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>sana</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Taxrirlash</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredGlData.map((gl: any,) => (
                            <TableRow key={gl.id}>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.id}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.department.id}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.department.bolim_nomi}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.bemor.id}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.bemor.fio}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.xona}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.tibbiy_karta}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.g1}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.g2}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.g3}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.g4}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.g5}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{gl.sana}</TableCell>
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

export default GlyukozaTable;