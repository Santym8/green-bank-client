import React from 'react';
import SelectSmall from '../../components/SelectSmall/SelectSmall';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



export const ModalTaxon = (row) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [rows, setRows] = React.useState([]);
    const [generoNombre, setgeneroNombre] = React.useState(row.generoNombre);

    const apiUrlGeneros = 'https://green-bank-api.onrender.com/api/taxonomia/genero'

    const [isLoading, setIsLoading] = React.useState(false);
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

    const getOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    const fetchRows = () => {
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

    // ------------------Añadir REGISTRO-------------------------- 

    const handleAnadir = () => {
        const familiaId = document.getElementById('idSelectModal').value;
        // Hacer una petición POST a la API del servidor
        handleClose();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ generoNombre, familiaId })
        };
        setIsLoading(true); // establecer isLoading en verdadero justo antes de comenzar la solicitud
        fetch(apiUrlGeneros, requestOptions)
            .then(response => response.json())
            .then(data => {
                fetchRows(); // actualizar filas
            })
            .catch(error => console.error(`Error al hacer la petición: ${error}`))
            .finally(() => setIsLoading(false)); // establecer isLoading en falso después de completar la solicitud
        setgeneroNombre('');
    };

    const handleGeneroNombreChange = (event) => {
        setgeneroNombre(event.target.value);
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
                            title='familia'
                            idSelect='idSelectModal'
                            apiUrl={'https://green-bank-api.onrender.com/api/taxonomia/familia'} />
                    </div>
                    <TextField
                        onChange={handleGeneroNombreChange}
                        value={generoNombre}
                        className="modalContainer__Text"
                        autoFocus="true"
                        fullWidth="true"></TextField>
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

