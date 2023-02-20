import React from 'react';
import HeadPrivateLayout from '../../components/HeadPrivateLayout/HeadPrivateLayout';
import SelectSmall from '../../components/SelectSmall/SelectSmall';
import './TaxonomiaGeneros.css';
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
import { ModalCreateGenero } from "./ModalCreateGeneros";
import { ModalUpdateGenero } from "./ModalUpdateGeneros";

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

  const getOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const fetchRows = () => {
    const apiUrlGeneros = 'https://green-bank-api.onrender.com/api/taxonomia/genero';
    setIsLoading(true); // establecer isLoading en verdadero justo antes de comenzar la solicitud
    fetch(apiUrlGeneros, getOptions)
      .then(response => response.json())
      .then(data => {
        data = data.data;
        data.sort((a, b) => (a.generoNombre < b.generoNombre ? -1 : 1));
        setRows(data);
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false)); // establecer isLoading en falso después de completar la solicitud
  }
  React.useEffect(() => {
    fetchRows();
  }, []);

  // ------------------ELIMINAR REGISTRO--------------------------
  const handleEliminar = (generoId) => {
    const apiUrlGeneros =
      "https://green-bank-api.onrender.com/api/taxonomia/genero/";

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(apiUrlGeneros + generoId, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        fetchRows();
      })
      .catch((error) => console.error(`Error al hacer la petición: ${error}`));
  };
  return (
    <TableContainer component={Paper}>
      {isLoading && <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }} />}
      <Table className='tableGeneros' sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align='left'>Código Género</TableCell>
            <TableCell align='left'>Familia</TableCell>
            <TableCell align="left">Género</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.generoId}>
              <TableCell className='row-edits-icons-taxonomia' component="th" scope="row">
                <ModalUpdateGenero
                  generoId={row.generoId}
                  generoNombre={row.generoNombre}
                  familiaId={row.Familium.familiaId}
                />
                <span class="material-symbols-outlined"
                  onClick={() => handleEliminar(row.generoId)}
                >
                  delete
                </span>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.generoId}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.Familium.familiaNombre}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.generoNombre}
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
            <ModalCreateGenero />
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

function TaxonomiaGeneros() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className='headPrivateContainer'>
        <HeadPrivateLayout
          title='Taxonomía Géneros'
          icon='Forest'
          user='FL'
        />
      </div>
      <div className='taxonomiaGenerosContainer'>
        <div className="GenerosFilters">
          <SelectSmall
            title='familia'
            apiUrl={
              "https://green-bank-api.onrender.com/api/taxonomia/familia"
            }

          />
          <div className='GenerosFilters__Button'>
            <p>Filtrar</p>
          </div>
          <p className='GenerosFilters__Title'>o Buscar Género</p>
          <TextField
            className='GenerosFilters__Search'
            id="standard-search"
            label="Buscar"
            type="search"
            fullWidth={true}
            autoFocus={true}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position='end'
                  classes={{ root: 'MuiInputAdornment-root' }}
                >
                  <span class="material-symbols-outlined">search</span>
                </InputAdornment>
              )
            }}
          />
        </div>

        <div className="taxonomiaGenerosContainer__table">
          {CustomPaginationActionsTable()}
        </div>
      </div>

    </>
  );
}


export default TaxonomiaGeneros;