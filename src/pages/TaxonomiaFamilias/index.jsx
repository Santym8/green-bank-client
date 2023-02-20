import React from 'react';
import HeadPrivateLayout from '../../components/HeadPrivateLayout/HeadPrivateLayout';
import './TaxonomiaFamilias.css';
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
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { ModalCreateFamilia } from "./ModalCreateFamilias";
import { ModalUpdateFamilia } from "./ModalUpdateFamilias";

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
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  const fetchRows = () => {
    const apiUrlFamilias = 'https://green-bank-api.onrender.com/api/taxonomia/familia';
    setIsLoading(true); // establecer isLoading en verdadero justo antes de comenzar la solicitud
    fetch(apiUrlFamilias, getOptions)
      .then(response => response.json())
      .then(data => {
        data = data.data;
        data.sort((a, b) => (a.familiaNombre < b.familiaNombre ? -1 : 1));
        setRows(data);
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false)); // establecer isLoading en falso después de completar la solicitud
  }

  React.useEffect(() => {
    fetchRows();
  }, []);

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

  // ------------------ELIMINAR REGISTRO--------------------------
  const handleEliminar = (familiaId) => {
    const apiUrlFamilias =
      "https://green-bank-api.onrender.com/api/taxonomia/familia/";
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(apiUrlFamilias + familiaId, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchRows(); // actualizar filas
      })
      .catch(error => console.error(`Error al hacer la petición: ${error}`));

  };
  return (
    <TableContainer component={Paper}>
      {isLoading && <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }} />}
      <Table className='tableFamilias' sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align='left'>Código Familia</TableCell>
            <TableCell align='left'>Familia</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.familiaId}>
              <TableCell className='row-edits-icons-taxonomia' component="th" scope="row">
                <ModalUpdateFamilia
                  familiaId={row.familiaId}
                  familiaNombre={row.familiaNombre}
                />
                <span
                  class="material-symbols-outlined"
                  onClick={() => handleEliminar(row.familiaId)}
                >
                  delete
                </span>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.familiaId}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.familiaNombre}
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
            <ModalCreateFamilia />
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

function TaxonomiaFamilias() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className='headPrivateContainer'>
        <HeadPrivateLayout
          title='Taxonomía Familias'
          icon='Landscape'
          user='FL'
        />
      </div>
      <div className='taxonomiaFamiliasContainer'>
        <div className="FamiliasFilters">
          <p className='FamiliasFilters__Title'> Buscar</p>
          <TextField
            className='FamiliasFilters__Search'
            id="standard-search"
            label="Buscar"
            type="search"
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

        <div className="taxonomiaFamiliasContainer__table">
          {CustomPaginationActionsTable() }
        </div>
      </div>

    </>
  );
}


export default TaxonomiaFamilias;