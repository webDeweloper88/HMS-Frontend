import React, { useEffect, useState } from 'react';
import { TableContainer, InputBase, Grid, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './style';
import { Search } from '@mui/icons-material';
import Button from '../../../btn';
import { useAppDispatch, useAppSelector } from '../../../../utils/hook';
import { getDoctortAssets } from '../../../../store/thunks/assets';

const DoctorTable = (props: any) => {
    const { setOpenPopup, openPopup } = props;
    const classes = useStyles();
    const doctorData = useAppSelector(state => state.doctor.doctors);
    console.log(doctorData)

    const handlePrint = () => {
        window.print();
    }
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getDoctortAssets());
    }, [dispatch]);


    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };
    const filteredDoctorData = doctorData.filter((doctor: any) =>
        doctor.fio.toLowerCase().includes(searchValue.toLowerCase())
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
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Id</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>F.I.O</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Mutaxasislik</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Bo`lim Id</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Taxrirlash</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredDoctorData.map((doctor: any) => (
                            <TableRow key={doctor.id}>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{doctor.id}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{doctor.fio}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{doctor.mutaxassislik}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{doctor.departmentId}</TableCell>

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

export default DoctorTable;