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

import { ModalCreateNombresLocales } from './ModalCreateNombresLocales';
import { ModalUpdateNombresLocales } from './ModalUpdateNombresLocales';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
// Modal
import Modal from '@mui/material/Modal';

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

function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [rows, setRows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

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

  //Mostrar Datos

  const getOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const fetchRows = () => {
    const apiUrlNombresLocales =
      "https://green-bank-api.onrender.com/api/taxonomia/nombre-local";

    setIsLoading(true); // establecer isLoading en verdadero justo antes de comenzar la solicitud
    fetch(apiUrlNombresLocales, getOptions)
      .then((response) => response.json())
      .then((data) => {
        data = data.data;
        data.sort((a, b) => (a.nombreLocalNombre < b.nombreLocalNombre ? -1 : 1));
        setRows(data);
        console.log(data.nombreLocalNombre);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false)); // establecer isLoading en falso después de completar la solicitud
  };

  //DELETE

  const handleEliminar = (nombreLocalId) => {
    const apiUrlNombresLocales =
      "https://green-bank-api.onrender.com/api/taxonomia/nombre-local/";

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(apiUrlNombresLocales + nombreLocalId, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        fetchRows();
      })
      .catch((error) => console.error(`Error al hacer la petición: ${error}`));
  };

  React.useEffect(() => {
    fetchRows();
  }, []);

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
            <TableRow key={row.nombreLocalId}>
              <TableCell
                className='row-edits-icons-taxonomia'
                component="th"
                scope="row">
                <ModalUpdateNombresLocales
                  familiaId={row.Subespecie.Especie.Genero.Familium.familiaId}
                  generoId={row.Subespecie.Especie.Genero.generoId}
                  especieId={row.Subespecie.Especie.especieId}
                  subespecieId={row.Subespecie.subespecieId}
                  nombreLocalId={row.nombreLocalId}
                  nombreLocalNombre={row.nombreLocalNombre}
                />
                <span
                  class="material-symbols-outlined"
                  onClick={() => handleEliminar(row.nombreLocalId)}
                >delete</span>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.nombreLocalId}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.Subespecie.Especie.Genero.Familium.familiaNombre}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.Subespecie.Especie.Genero.generoNombre}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.Subespecie.Especie.especieNombre}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.Subespecie.subespecieNombre}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.nombreLocalNombre}
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
            <ModalCreateNombresLocales />
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
              title="familia"
              apiUrl={
                "https://green-bank-api.onrender.com/api/taxonomia/familia"
              }
            />
            <SelectSmall
              title="genero"
              apiUrl={
                "https://green-bank-api.onrender.com/api/taxonomia/genero"
              }
            />
            <SelectSmall
              title="especie"
              apiUrl={
                "https://green-bank-api.onrender.com/api/taxonomia/especie"
              }
            />
            <SelectSmall
              title="subespecie"
              apiUrl={
                "https://green-bank-api.onrender.com/api/taxonomia/subespecie"
              }
            />
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