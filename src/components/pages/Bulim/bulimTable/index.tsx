import React, { useEffect, useState } from 'react';
import { TableContainer, InputBase, Grid, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './style';
import { Search } from '@mui/icons-material';
import Button from '../../../btn';
import { useAppDispatch, useAppSelector } from '../../../../utils/hook';
import { getDepartmentAssets } from '../../../../store/thunks/assets';

const BulimTable = (props: any) => {
    const { setOpenPopup, openPopup } = props;
    const classes = useStyles();
    const departmentData = useAppSelector(state => state.department.departments);


    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getDepartmentAssets());
    }, [dispatch]);


    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };
    const filteredBemorData = departmentData.filter((bulim: any) =>
        bulim.bolim_nomi.toLowerCase().includes(searchValue.toLowerCase())
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
                            text="Bolimni ro`yxatdan o`tkazish"
                            size='large'
                            onClick={() => { setOpenPopup(!openPopup) }}
                        >
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Id</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Bo`limning nome</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Xudud</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>MUassasa</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Telefon Raqami</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Bo`lim boshlig`i</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Shifokorlar soni </TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Taxrirlash</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredBemorData.map((bulim: any) => (
                            <TableRow key={bulim.id}>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bulim.id}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bulim.bolim_nomi}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bulim.hudud}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bulim.muassasa}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bulim.telefon_raqam}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bulim.bolim_boshligi}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bulim.shifokorlar_soni}</TableCell>
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
        </>
    );
};

export default BulimTable;