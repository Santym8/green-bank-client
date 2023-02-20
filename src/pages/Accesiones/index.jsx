
import React from 'react';
import HeadPrivateLayout from '../../components/HeadPrivateLayout/HeadPrivateLayout';
import SelectSmall from '../../components/SelectSmall/SelectSmall';
import './Accesiones.css';
import TextField from "@mui/material/TextField";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

function TablePaginationActions(props) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (event) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (

		<Box sx={{ flexShrink: 0, ml: 2.5 }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	);
}

TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
};

function createData(codigo, nombre, subespecie, especie, genero, familia, fecha) {
	return { codigo, nombre, subespecie, especie, genero, familia, fecha };
}

const rows = [
	createData("ABCD1234", "ALOE", "ALOE BARBADENSIS", "ALOE VERA", "ALOE", "ASPHODELACEAE", "20/02/2023"),
	createData("ABCD1235", "ALOE", "ALOE BARBADENSIS", "ALOE VERA", "ALOE", "ASPHODELACEAE", "20/02/2023"),
	createData("ABCD1236", "ALOE", "ALOE BARBADENSIS", "ALOE VERA", "ALOE", "ASPHODELACEAE", "20/02/2023"),
	createData("ABCD1237", "ALOE", "ALOE BARBADENSIS", "ALOE VERA", "ALOE", "ASPHODELACEAE", "20/02/2023"),
	createData("ABCD1238", "ALOE", "ALOE BARBADENSIS", "ALOE VERA", "ALOE", "ASPHODELACEAE", "20/02/2023"),
	createData("ABCD1239", "ALOE", "ALOE BARBADENSIS", "ALOE VERA", "ALOE", "ASPHODELACEAE", "20/02/2023"),
]
	.sort((a, b) => (a.nombre < b.nombre ? -1 : 1));


function CustomPaginationActionsTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(4);

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<TableContainer component={Paper}>
			<Table style={{ position: "relative" }} className="tableUsuarios" sx={{ minWidth: 500 }} aria-label="custom pagination table">
				<TableHead>
					<TableRow>
						<TableCell align="left">Codigo</TableCell>
						<TableCell align="left">Nombre</TableCell>
						<TableCell align="left">Subespecie</TableCell>
						<TableCell align="left">Especie</TableCell>
						<TableCell align="left">Género</TableCell>
						<TableCell align="left">Familia</TableCell>
						<TableCell align="left">Fecha de Registro</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{(rowsPerPage > 0
						? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						: rows
					).map((row) => (

						<TableRow key={row.codigo}>
							<TableCell component="th" scope="row">
								<Link to={"/accesiones/detalles/accesion/detalles"}>
									{row.codigo}
								</Link>
							</TableCell>
							<TableCell component="th" scope="row">
								{row.nombre}
							</TableCell>
							<TableCell component="th" scope="row">
								{row.subespecie}
							</TableCell>
							<TableCell style={{ width: 160 }} align="left">
								{row.especie}
							</TableCell>
							<TableCell style={{ width: 160 }} align="left">
								{row.genero}
							</TableCell>
							<TableCell style={{ width: 160 }} align="left">
								{row.familia}
							</TableCell>
							<TableCell style={{ width: 160 }} align="left">
								{row.fecha}
							</TableCell>
						</TableRow>

					))}

					{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={5} />
						</TableRow>
					)}
				</TableBody>
				<TableFooter className='content_footer'>
					<TableRow className="paginationTableUser">
						<div className="newUsuarioButton">
							<p>+ Nuevo</p>
						</div>
						<TablePagination
							rowsPerPageOptions={[]}
							colSpan={3}
							count={rows.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
							ActionsComponent={TablePaginationActions}
							className="clase-abajo-izquierda"
							style={{ position: "absolute", bottom: 0, right: 30 }}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	);
}

function Accesiones() {
	const [searchTerm, setSearchTerm] = useState("");
	const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

	const handleChange = (newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<div className='headPrivateContainer'>
				<HeadPrivateLayout
					title='Accesiones'
					icon='Compost'
					user='FL'
				/>
			</div>
			<div className='AccesionesContainer'>
				<div className="AccesionesFilters">
					<div className="SelectsContainerAccesiones">
						<div className="selectAccesionIndividual">
							<p className='AccesionesFilters__Label'>Familia</p>
							<SelectSmall
								title='familia'
								apiUrl={
									"https://green-bank-api.onrender.com/api/taxonomia/familia"
								}
							/>
						</div>
						<div className="selectAccesionIndividual">
							<p className='AccesionesFilters__Label'>Genero</p>
							<SelectSmall
								title='genero'
								apiUrl={
									"https://green-bank-api.onrender.com/api/taxonomia/genero"
								}
							/>
						</div>
						<div className="selectAccesionIndividual">
							<p className='AccesionesFilters__Label'>Especie</p>
							<SelectSmall
								title='especie'
								apiUrl={
									"https://green-bank-api.onrender.com/api/taxonomia/especie"
								}
							/>
						</div>
						<div className="selectAccesionIndividual">
							<p className='AccesionesFilters__Label'>Subespecie</p>
							<SelectSmall
								title='subespecie'
								apiUrl={
									"https://green-bank-api.onrender.com/api/taxonomia/subespecie"
								}
							/>
						</div>
						<div className="selectAccesionIndividual">
							<p className='AccesionesFilters__Label'>Nombre</p>
							<SelectSmall
								title='nombreLocal'
								apiUrl={
									"https://green-bank-api.onrender.com/api/taxonomia/nombre-local"
								}
							/>
						</div>
					</div>
					<div className='AccesionesBuscadores'>
						<div className="AccesionesBuscadores__Dates">
							<p className='AccesionesFilters__Label'>Fecha Registro</p>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<Stack spacing={1}>
									<DesktopDatePicker
										label="Fecha Inicio"
										inputFormat="DD/MM/YYYY"
										value={value}
										onChange={handleChange}
										renderInput={(params) => <TextField {...params} />}
									/>
								</Stack>
							</LocalizationProvider>
							<p className='AccesionesFilters__Label'>a</p>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<Stack spacing={3}>
									<DesktopDatePicker
										label="Fecha Fin"
										inputFormat="DD/MM/YYYY"
										value={value}
										onChange={handleChange}
										renderInput={(params) => <TextField {...params} />}
									/>
								</Stack>
							</LocalizationProvider>
						</div>
						<div className='AccesionesFilters__Button'>
							<p>Filtrar</p>
						</div>
						<p className='AccesionesFilters__Title'>o Buscar</p>
						<div className="Accesiones__ContainerSearch">
							<TextField
								className="AccesionesFilters__Search"
								id="standard-search"
								label="Buscar"
								type="search"
								fullWidth={false}
								autoFocus={true}
								value={searchTerm}
								onChange={(event) => setSearchTerm(event.target.value)}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end" classes={{ root: "MuiInputAdornment-root" }}>
											<span class="material-symbols-outlined">search</span>
										</InputAdornment>
									),
								}}
							/>
						</div>
					</div>
				</div>

				<div className="taxonomiaEspeciesContainer__table">
					{CustomPaginationActionsTable()}
				</div>
			</div>

		</>
	);
}


export default Accesiones;