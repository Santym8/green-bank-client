import React from 'react';
import HeadPrivateLayout from '../../components/HeadPrivateLayout/HeadPrivateLayout';
import SelectSmall from '../../components/SelectSmall/SelectSmall';
import './TaxonomiaSubespecies.css';
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
import { ModalCreateSubEspecies } from './ModalCreateSubEspecies';
import { ModalUpdateSubEspecie } from './ModalUpdateSubEspecies';
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
    const apiUrlSubEspecies =
      "https://green-bank-api.onrender.com/api/taxonomia/subespecie";

    setIsLoading(true); // establecer isLoading en verdadero justo antes de comenzar la solicitud
    fetch(apiUrlSubEspecies, getOptions)
      .then((response) => response.json())
      .then((data) => {
        data = data.data;
        data.sort((a, b) => (a.subespecieNombre < b.subespecieNombre ? -1 : 1));
        setRows(data);
        console.log(data.subespecieNombre);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false)); // establecer isLoading en falso después de completar la solicitud
  };

  //DELETE

  const handleEliminar = (subespecieId) => {
    const apiUrlSubEspecies =
      "https://green-bank-api.onrender.com/api/taxonomia/subespecie/";

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(apiUrlSubEspecies + subespecieId, requestOptions)
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
      <Table className='tableSubespecies' sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align='left'>Código Subespecie</TableCell>
            <TableCell align='left'>Familia</TableCell>
            <TableCell align="left">Género</TableCell>
            <TableCell align="left">Especie</TableCell>
            <TableCell align="left">Subespecie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.subespecieId}>
              <TableCell className='row-edits-icons-taxonomia' component="th" scope="row">
                <ModalUpdateSubEspecie
                subespecieId={row.subespecieId}
                especieNombre={row.especieNombre}
                familiaId={row.Especie.Genero.Familium.familiaId}
                generoId={row.Especie.Genero.generoId}    
                especieId={row.Especie.especieId}                            
                />
                <span
                  class="material-symbols-outlined"
                  onClick={() => handleEliminar(row.subespecieId)}
                >delete
                </span>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.subespecieId}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.Especie.Genero.Familium.familiaNombre}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.Especie.Genero.generoNombre}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.Especie.especieNombre}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.subespecieNombre}
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
            <ModalCreateSubEspecies />
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

function TaxonomiaSubespecies() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className='headPrivateContainer'>
        <HeadPrivateLayout
          title='Taxonomía Subespecies'
          icon='Grass'
          user='FL'
        />
      </div>
      <div className='taxonomiaSubespeciesContainer'>
        <div className="SubespeciesFilters">
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
          </div>
          <div className='SubespeciesFilters__Button'>
            <p>Filtrar</p>
          </div>
          <p className='SubespeciesFilters__Title'>o Buscar Subespecie</p>
          <TextField
            className='SubespeciesFilters__Search'
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

        <div className="taxonomiaSubespeciesContainer__table">
          {CustomPaginationActionsTable()}
        </div>
      </div>

    </>
  );
}


export default TaxonomiaSubespecies;