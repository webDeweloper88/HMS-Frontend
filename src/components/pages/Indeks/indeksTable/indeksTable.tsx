import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, InputBase, Grid, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Typography } from '@mui/material';

import { useStyles } from './style';
import { Search } from '@mui/icons-material';
import Button from '../../../btn';
import { useAppDispatch, useAppSelector } from '../../../../utils/hook';
import { getIndeksAll } from '../../../../store/thunks/assets';

const IndeksTable = (props: any) => {
	const { setOpenPopup, openPopup } = props;
	const classes = useStyles();
	const indeksData = useAppSelector(state => state.indeks.indeks);



	const handlePrint = () => {
		window.print();
	}
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getIndeksAll());
	}, [dispatch]);


	const [searchValue, setSearchValue] = useState('');
	const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};
	const filteredIndeksData = indeksData.filter((indeks: any) =>
		indeks.bemor.fio.toLowerCase().includes(searchValue.toLowerCase())
	);
	return (
		<>
			<Grid container py={5}>
				<Grid item xs={12} md={6}>
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
							text="BO'LIM	MUDIRI BILAN BIRGA KO'RUV"
							size='large'
							onClick={() => { setOpenPopup(!openPopup) }}
						>
						</Button>
					</Box>
				</Grid>
			</Grid>
			<Grid container sx={{ gap: '15px' }}>
				{filteredIndeksData.map((indeks) => (
					<React.Fragment key={indeks.id}>
						<Grid item xs={12}>
							<Accordion>
								<AccordionSummary sx={{ backgroundColor: 'primary.dark' }}>
									<Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
										<span>Id:{indeks.id}</span>
										<span>Bemor: {indeks.bemor.fio} </span>
									</Box>
								</AccordionSummary>
								<AccordionDetails >
									<Grid container margin={'auto'} sx={{ rowGap: '25px' }}>
										<Grid item sm={12} md={6} lg={4} >
											<Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>Indeks Id:</b> <span>{indeks.id}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>Bo`lim` Id:</b> <span>{indeks.department.id}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>Bo`lim nomi`:</b> <span>{indeks.department.bolim_nomi}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>Bemor Id:</b> <span>{indeks.bemor.id}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>Bemor F.I.O:</b> <span>{indeks.bemor.fio}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>t_c:</b> <span>{indeks.t_c}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>sana:</b> <span>{indeks.sana}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>rieatm:</b> <span>{indeks.rieatm}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>shikoyat:</b> <span>{indeks.shikoyat}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>anamnezis:</b> <span>{indeks.anamnezis}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>anamnezis_vitae:</b> <span>{indeks.anamnezis_vitae}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>epid:</b> <span>{indeks.epid}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>status:</b> <span>{indeks.status}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>nafas_olish:</b> <span>{indeks.nafas_olish}</span>
												</Box>


											</Box>
										</Grid>
										<Grid item sm={12} md={6} lg={4}>
											<Box>

												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>yurak_qon_tomir:</b> <span>{indeks.yurak_qon_tomir}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>ovqat_hazm_qilish:</b> <span>{indeks.ovqat_hazm_qilish}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>siydik_chiqarish_tizimi:</b> <span>{indeks.siydik_chiqarish_tizimi}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>gipotalamo:</b> <span>{indeks.gipotalamo}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>buyi:</b> <span>{indeks.buyi}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>ogirligi:</b> <span>{indeks.ogirligi}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>imt:</b> <span>{indeks.imt}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>imt2:</b> <span>{indeks.imt2}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>qalqonsimon_bez:</b> <span>{indeks.qalqonsimon_bez}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>qalqonsimon_bezoldi_bez:</b> <span>{indeks.qalqonsimon_bezoldi_bez}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>buyrak_usti:</b> <span>{indeks.buyrak_usti}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>oshqozon_osti:</b> <span>{indeks.oshqozon_osti}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>jinsiy_tizim:</b> <span>{indeks.jinsiy_tizim}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>dastlabki_tashxiz:</b> <span>{indeks.dastlabki_tashxiz}</span>
												</Box>

											</Box>
										</Grid>
										<Grid item sm={12} md={6} lg={4}>
											<Box>

												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>asosiy_kasallik:</b> <span>{indeks.asosiy_kasallik}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>hamrox:</b> <span>{indeks.hamrox}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>umumiy_qon_taxlili:</b> <span>{indeks.umumiy_qon_taxlili}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>umumiy_siydik_taxlili:</b> <span>{indeks.umumiy_siydik_taxlili}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>qondaqand_taxlili:</b> <span>{indeks.qondaqand_taxlili}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>bioximik_taxlil:</b> <span>{indeks.bioximik_taxlil}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>rw:</b> <span>{indeks.rw}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>rengenttekshiruv:</b> <span>{indeks.rengenttekshiruv}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>ekg_tekshiruv:</b> <span>{indeks.ekg_tekshiruv}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>parxez:</b> <span>{indeks.parxez}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>davolovchi:</b> <span>{indeks.davolovchi}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>bolim_mudiri:</b> <span>{indeks.bolim_mudiri}</span>
												</Box>
												<Box sx={{ display: 'flex', columnGap: '10px' }}>
													<b>direktor_urinbosari:</b> <span>{indeks.direktor_urinbosari}</span>
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

export default IndeksTable;