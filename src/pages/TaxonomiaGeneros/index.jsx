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

function createData(codigo, familia, genero) {
  return { codigo, familia, genero };
}
const menuItems = [
  { value: 1, label: "Apiaceae" },
  { value: 2, label: "Rosaceae" },
  { value: 3, label: "Liliaceae" },
];
const rows = [
  createData(11, "FAMILIA", "ACER"),
  createData(12, "FAMILIA", "ARALIA"),
  createData(13, "FAMILIA", "ALOE"),
  createData(14, "FAMILIA", "AMARANTHUS"),
  createData(15, "FAMILIA", "ANEMONE"),
  createData(16, "FAMILIA", "AQUILEGIA"),
  createData(17, "FAMILIA", "ARCTOTIS"),
  createData(18, "FAMILIA", "ARISTOLOCHIA"),
  createData(19, "FAMILIA", "ARALIA"),
  createData(20, "FAMILIA", "ALOE"),
  createData(21, "FAMILIA", "AMARANTHUS"),
  createData(22, "FAMILIA", "ANEMONE"),
  createData(23, "FAMILIA", "AQUILEGIA"),
  createData(24, "FAMILIA", "ARCTOTIS"),
  createData(25, "FAMILIA", "ARISTOLOCHIA"),

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
      <Table className='tableGeneros' sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align='left'>Código Familia</TableCell>
            <TableCell align='left'>Familia</TableCell>
            <TableCell align="left">Género</TableCell>
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
function ModalTaxon() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <p className='modalContainer__Title'>Añadir Nuevo Género</p>
          <div className="modalContainer__SelectGenero">
            <SelectSmall
              title='Familia'
              menuItems={menuItems} />
          </div>
          <TextField className="modalContainer__Text" autoFocus="true" fullWidth="true"></TextField>
          <div className="modalButtons">
            <div onClick={handleClose} className='modalButtons__Anadir'>
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
            title='Familia'
            menuItems={menuItems} />
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
                <InputAdornment position='end' classes={{ root: 'MuiInputAdornment-root' }}>
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