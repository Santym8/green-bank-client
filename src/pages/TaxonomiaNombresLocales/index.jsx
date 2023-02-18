import React from 'react';
import HeadPrivateLayout from '../../components/HeadPrivateLayout/HeadPrivateLayout';
import SelectSmall from '../../components/SelectSmall/SelectSmall';
import './TaxonomiaNombresLocales.css';
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

function createData(codigo, familia, genero, especie, subespecie, nombreLocal) {
    return { codigo, familia, genero, especie, subespecie, nombreLocal };
}

const rows = [
    createData(21, "ALOACEAE", "ALOE", "ALOE VERA", "ALOE BARBADENSIS", "ALOE"),
    createData(21, "ALOACEAE", "ALOE", "ALOE VERA", "ALOE BARBADENSIS", "SAVILA"),
    createData(21, "ALOACEAE", "ALOE", "ALOE VERA", "ALOE BARBADENSIS", "ZAVILA"),
    createData(21, "ALOACEAE", "ALOE", "ALOE VERA", "ALOE BARBADENSIS", "XAVILA"),
    createData(21, "ALOACEAE", "ALOE", "ALOE VERA", "ALOE BARBADENSIS", "PENCO"),
].sort((a, b) => (a.familia < b.familia ? -1 : 1));

function CustomPaginationActionsTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
            <Table className='tableNombresLocales' sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align='left'>Código Nombre Local</TableCell>
                        <TableCell align='left'>Familia</TableCell>
                        <TableCell align="left">Género</TableCell>
                        <TableCell align="left">Especie</TableCell>
                        <TableCell align="left">Subespecie</TableCell>
                        <TableCell align="left">Nombre Local</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <TableRow key={row.codigo}>
                            <TableCell className='row-edits-icons-taxonomia' component="th" scope="row">
                                <span class="material-symbols-outlined">edit</span>
                                <span class="material-symbols-outlined">delete</span>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.codigo}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="left">
                                {row.familia}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="left">
                                {row.genero}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="left">
                                {row.especie}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="left">
                                {row.subespecie}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="left">
                                {row.nombreLocal}
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow className='paginationTable'>
                        <div className='newNombresLocalesButton'>
                            <p>+  Nuevo</p>
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
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

function TaxonomiaNombresLocales() {
    const [searchTerm, setSearchTerm] = useState("");
    const menuItemsFamilias = [
        { value: 1, label: "Asteraceae" },
        { value: 2, label: "Brasicaceae" },
        { value: 3, label: "Cactaceae" },
        { value: 4, label: "Rosaceae" },
        { value: 5, label: "Liliaceae" },
    ];
    const menuItemsGeneros = [
        { value: 1, label: "Acer" },
        { value: 2, label: "Aralia" },
        { value: 3, label: "Aloe" },
        { value: 4, label: "Amarathus" },
    ];
    const menuItemsEspecies = [
        { value: 1, label: "Aloe Vera" },
        { value: 2, label: "Aloe Ferox" },
        { value: 3, label: "Aloe Striata" },
        { value: 4, label: "Aloe Nobilis" },
    ];
    const menuItemsSubespecies = [
        { value: 1, label: "Aloe Barbadensis" },
        { value: 2, label: "Aloe Chinensis" },
        { value: 3, label: "Aloe Scheideana" },
        { value: 4, label: "Aloe Turkanensis" },
        { value: 5, label: "Aloe Africana" },
    ];
    return (
        <>
            <div className='headPrivateContainer'>
                <HeadPrivateLayout
                    title='Taxonomía Nombres Locales'
                    icon='potted_plant'
                    user='FL'
                />
            </div>
            <div className='taxonomiaNombresLocalesContainer'>
                <div className="nombresLocalesFilters">
                    <div className="SelectsContainer">
                        <SelectSmall
                            title='Familia'
                            menuItems={menuItemsFamilias} />
                        <SelectSmall
                            title='Genero'
                            menuItems={menuItemsGeneros} />
                        <SelectSmall
                            title='Especie'
                            menuItems={menuItemsEspecies} />
                        <SelectSmall
                            title='Subespecie'
                            menuItems={menuItemsSubespecies} />
                    </div>
                    <div className='nombresLocalesFilters__Button'>
                        <p>Filtrar</p>
                    </div>
                    <p className='nombresLocalesFilters__Title'>o Buscar Nombre Local</p>
                    <TextField
                        className='nombresLocalesFilters__Search'
                        id="standard-search"
                        label="Buscar"
                        type="search"
                        fullWidth={true}
                        autoFocus={true}
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end' classes={{ root: 'MuiInputAdornment-root' }}>
                                    <span class="material-symbols-outlined">search</span>
                                </InputAdornment>
                            )
                        }}
                    />
                </div>

                <div className="taxonomiaNombresLocalesContainer__table">
                    {CustomPaginationActionsTable()}
                </div>
            </div>

        </>
    );
}


export default TaxonomiaNombresLocales;