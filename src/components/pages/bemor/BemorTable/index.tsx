import React, { useEffect, useState } from 'react';
import { TableContainer, InputBase, Grid, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './style';
import { Search } from '@mui/icons-material';
import Button from '../../../btn';
import { useAppDispatch, useAppSelector } from '../../../../utils/hook';
import { getBemorAssets } from '../../../../store/thunks/assets';

const BemorTable = (props: any) => {
    const { setOpenPopup, openPopup } = props;
    const classes = useStyles();
    const bemorData = useAppSelector(state => state.bemor.assets);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getBemorAssets());
    }, [dispatch]);
    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };
    const filteredBemorData = bemorData.filter((bemor: any) =>
        bemor.fio.toLowerCase().includes(searchValue.toLowerCase())
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
                            text="Bemorni ro`yxatdan o`tkazish"
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
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>ID</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>F.I.O.</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Jinsi</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Tug'ilgan sanasi</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Buyi</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Vazni</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Tana xarorati</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Manzili</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Ish joyi</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Qayerdan yuborilgan</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Yuborilgan tashxis</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Qabulxona tashxisi</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Shoshilinch keltirilgan</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Qanday transportda</TableCell>
                            <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredBemorData.map((bemor: any) => (
                            <TableRow key={bemor.id}>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.id}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.fio}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.jinsi}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.tugilgan_sana}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.buyi}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.vazni}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.tana_xarorati}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.manzili}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.ish_joyi}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.qayerdan_yuborilgan}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.yuborilgan_tashxis}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.qabulxona_tashxisi}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.shoshilinch_keltirilgan}</TableCell>
                                <TableCell align='center' sx={{ border: "1px solid #3c3c3c" }}>{bemor.qanday_transportda}</TableCell>
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

export default BemorTable;