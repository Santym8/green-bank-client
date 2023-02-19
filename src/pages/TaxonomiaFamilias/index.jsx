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
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [editingRow, setEditingRow] = React.useState(null);

  const apiUrl = 'https://green-bank-api.onrender.com/api/taxonomia/familia';

  const getOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const fetchRows = () => {
    setIsLoading(true); // establecer isLoading en verdadero justo antes de comenzar la solicitud
    fetch(apiUrl, getOptions)
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
  // -----------------AÑADIR REGISTRO-----------------------
  const handleAnadir = (familiaNombre) => {
    // Hacer una petición POST a la API del servidor
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ familiaNombre })
    };
    setIsLoading(true); // establecer isLoading en verdadero justo antes de comenzar la solicitud
    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchRows(); // actualizar filas
      })
      .catch(error => console.error(`Error al hacer la petición: ${error}`))
      .finally(() => setIsLoading(false)); // establecer isLoading en falso después de completar la solicitud
  };

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
  // ---------------------EDITAR REGISTRO-----------------------------
  const handleEditarSubmit = (newData, row) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    };
    setIsLoading(true);
    fetch(`${apiUrl}/${row.familiaId}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const rowIndex = rows.findIndex(currentRow => currentRow.familiaId === row.familiaId);
        if (rowIndex !== -1) {
          const updatedRows = [...rows];
          updatedRows[rowIndex] = newData;
          setRows(updatedRows);
          fetchRows(); // actualizar filas
        }
        setEditingRow(null);
      })
      .catch(error => console.error(`Error al hacer la petición: ${error}`))
      .finally(() => setIsLoading(false));
  };
  // ------------------ELIMINAR REGISTRO--------------------------
  const handleEliminar = (familiaId) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`${apiUrl}/${familiaId}`, requestOptions)
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
                <ModalEditar row={row} onSubmit={(newData) => handleEditarSubmit(newData, row)} onClose={() => setEditingRow(null)} />
                <span class="material-symbols-outlined" onClick={() => handleEliminar(row.familiaId)}>delete</span>
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
            <ModalTaxon onAdd={handleAnadir} />
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

function ModalEditar({ row, onSubmit, onClose }) {
  const [open, setOpen] = React.useState(false);
  const [familiaNombre, setFamiliaNombre] = React.useState(row.familiaNombre);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleSubmit = () => {

    const newData = { familiaId: row.familiaId, familiaNombre };
    onSubmit(newData);
    handleClose();
  };

  const handleChange = (event) => {
    setFamiliaNombre(event.target.value);
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
    <>
      <span onClick={handleOpen} class="material-symbols-outlined">edit</span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalContainer" sx={style}>
          <p className='modalContainer__Title'>Editar Familia</p>
          <TextField
            required
            label="Nombre de la familia"
            value={familiaNombre}
            onChange={handleChange}
          />
          <div className="modalButtons">
            <div onClick={handleSubmit} className='modalButtons__Anadir'>
              <p>Guardar</p>
            </div>
            <div onClick={handleClose} variant="outlined" className='modalButtons__Cancelar'>
              <p>Cancelar</p>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

function ModalTaxon(props) {
  const { onAdd } = props;
  const [open, setOpen] = React.useState(false);
  const [familiaNombre, setFamiliaNombre] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAnadir = () => {
    handleClose();
    onAdd(familiaNombre); // llamar a la función de actualización de filas
    setFamiliaNombre('');
  };

  const handleFamiliaNombreChange = (event) => {
    setFamiliaNombre(event.target.value);
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
          <p className='modalContainer__Title'>Añadir Nueva Familia</p>
          <TextField
            className="modalContainer__Text"
            autoFocus="true"
            value={familiaNombre}
            onChange={handleFamiliaNombreChange}
            label="Nombre de la familia"
          />
          <div className="modalButtons">
            <div onClick={handleAnadir} className='modalButtons__Anadir'>
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
          <CustomPaginationActionsTable />
        </div>
      </div>

    </>
  );
}


export default TaxonomiaFamilias;