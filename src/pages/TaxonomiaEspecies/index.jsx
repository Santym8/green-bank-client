import React from 'react';
import HeadPrivateLayout from '../../components/HeadPrivateLayout/HeadPrivateLayout';
import SelectSmall from '../../components/SelectSmall/SelectSmall';
import './TaxonomiaEspecies.css';
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
import CampoDeTexto from '../../components/TextField/CampoDeTexto';
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

// function createData(codigo, familia, genero, especie) {
//   return { codigo, familia, genero, especie };
// }

// const rows = [
//   createData(21, "ALOACEAE", "ALOE", "ALOE VERA"),
//   createData(22, "ALOACEAE", "ALOE", "ALOE FEROX"),
//   createData(23, "ALOACEAE", "ALOE", "ALOE STRIATA"),
//   createData(24, "ALOACEAE", "ALOE", "ALOE NOBILIS"),
//   createData(25, "ALOACEAE", "ALOE", "ALOE SPECIOSA"),
//   createData(26, "ALOACEAE", "ALOE", "ALOE MARLOTHII"),
//   createData(27, "ALOACEAE", "ALOE", "ALOE SUPRALEVIS"),
//   createData(28, "ALOACEAE", "ALOE", "ALOE PERRYI"),

// ].sort((a, b) => (a.familia < b.familia ? -1 : 1));
// const menuItemsFamilias = [
//   { value: 1, label: "Asteraceae" },
//   { value: 2, label: "Brasicaceae" },
//   { value: 3, label: "Cactaceae" },
//   { value: 4, label: "Rosaceae" },
//   { value: 5, label: "Liliaceae" },
// ];
// const menuItemsGeneros = [
//   { value: 1, label: "Acer" },
//   { value: 2, label: "Aralia" },
//   { value: 3, label: "Aloe" },
//   { value: 4, label: "Amarathus" },
// ];
function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [rows, setRows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchRows = () => {
    setIsLoading(true); // establecer isLoading en verdadero justo antes de comenzar la solicitud
    fetch(apiUrlEspecies, getOptions)
      .then(response => response.json())
      .then(data => {
        data = data.data;
        data.sort((a, b) => (a.especieNombre < b.especieNombre ? -1 : 1));
        setRows(data);
        console.log(data.especieNombre);
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

  const getOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  const apiUrlEspecies = 'https://green-bank-api.onrender.com/api/taxonomia/especie';



  return (
    <TableContainer component={Paper}>
      <Table className='tableEspecies' sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align='left'>Código Especie</TableCell>
            <TableCell align='left'>Familia</TableCell>
            <TableCell align="left">Género</TableCell>
            <TableCell align="left">Especie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.especieId}>
              <TableCell className='row-edits-icons-taxonomia' component="th" scope="row">
                <span class="material-symbols-outlined">edit</span>
                <span class="material-symbols-outlined">delete</span>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.especieId}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.Genero.Familium.familiaNombre}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.Genero.generoNombre}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.especieNombre}
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
            {ModalTaxon()}
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
function ModalTaxon(fetchRows) {

  const apiUrlEspecies = 'https://green-bank-api.onrender.com/api/taxonomia/especie';

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [familiaId, setFamiliaId] = useState('');
  const [especieNombre, setEspecieNombre] = useState('');
  const [generoId, setGeneroId] = useState('');
  
  const handleEnviado = () => {
    console.log(familiaId, "Familia");
    console.log(generoId, "Genero");
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "especieNombre": especieNombre,
        "generoId": generoId
      })
    };
    fetch(apiUrlEspecies, requestOptions)
      .then(response => response.json())
      .then(data => {
        handleClose() // cerrar modal
        window.location.reload()
      })
      .catch(error => console.error(`Error al hacer la petición: ${error}`))
      ;    
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (

    <div>
      <div onClick={handleOpen} className='newFamiliasButton'>
        <p>+  Nuevo</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalContainer" sx={style}>
          <p className='modalContainer__Title'>Añadir Nueva Especie</p>
          <div className="modalContainer__SelectsEspecies">
            <SelectSmall
              value={familiaId}
              setValue={setFamiliaId}
              title='familia'
              apiUrl={'https://green-bank-api.onrender.com/api/taxonomia/familia'} />
            <SelectSmall
              value={generoId}
              setValue={setGeneroId}
              title='genero'
              apiUrl={'https://green-bank-api.onrender.com/api/taxonomia/genero'} />
          </div>

          <CampoDeTexto 
          value={especieNombre}
          setValue={setEspecieNombre}
          />
          <div className="modalButtons">
            <div onClick={handleEnviado} className='modalButtons__Anadir'>
              <p>Añadir</p>
            </div>
            <div onClick={handleClose} className='modalButtons__Cancelar'>
              <p>Cancelar</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
function TaxonomiaEspecies() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className='headPrivateContainer'>
        <HeadPrivateLayout
          title='Taxonomía Especies'
          icon='Park'
          user='FL'
        />
      </div>
      <div className='taxonomiaEspeciesContainer'>
        <div className="EspeciesFilters">
          <div className="SelectsContainer">
            <SelectSmall
              title='familia'
              apiUrl={'https://green-bank-api.onrender.com/api/taxonomia/familia'} />
            <SelectSmall
              title='genero'
              apiUrl={'https://green-bank-api.onrender.com/api/taxonomia/genero'} />
          </div>
          <div className='EspeciesFilters__Button'>
            <p>Filtrar</p>
          </div>
          <p className='EspeciesFilters__Title'>o Buscar Especie</p>
          <TextField
            className='EspeciesFilters__Search'
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

        <div className="taxonomiaEspeciesContainer__table">
          {CustomPaginationActionsTable()}
        </div>
      </div>

    </>
  );
}


export default TaxonomiaEspecies;