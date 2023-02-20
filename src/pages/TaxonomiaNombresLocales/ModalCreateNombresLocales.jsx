import React from "react";
import { useState } from "react";
import './TaxonomiaNombresLocales.css';
import Box from "@mui/material/Box";
import CampoDeTexto from "../../components/TextField/CampoDeTexto";
import SelectSmall from "../../components/SelectSmall/SelectSmall";
// Modal
import Modal from "@mui/material/Modal";

export const ModalCreateNombresLocales = () => {


  const apiUrlSubEspecies =
    "https://green-bank-api.onrender.com/api/taxonomia/nombre-local";

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [subespecieId, setsubespecieId] = useState(null);
  const [familiaId, setFamiliaId] = useState(null);
  const [especieNombre, setEspecieNombre] = useState(null);
  const [generoId, setGeneroId] = useState(null);
  const [especiesId, setespeciesId] = useState(null);
  const [nombreLocalNombre, setnombreLocalNombre] = useState(null);

  const handleEnviado = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombreLocalNombre: nombreLocalNombre,
        subespecieId: subespecieId,
      }),
    };
    fetch(apiUrlSubEspecies, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        handleClose(); // cerrar modal
        window.location.reload();
      })
      .catch((error) => console.error(`Error al hacer la petición: ${error}`));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <div onClick={handleOpen} className="newFamiliasButton">
        <p>+ Nuevo</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalContainer" sx={style}>
          <p className="modalContainer__Title">Añadir Nueva SubEspecie</p>
          <div className="modalContainer__SelectsEspecies">
            <SelectSmall
              value={familiaId}
              setValue={setFamiliaId}
              title="familia"
              apiUrl={
                "https://green-bank-api.onrender.com/api/taxonomia/familia"
              }
            />
            <SelectSmall
              value={generoId}
              setValue={setGeneroId}
              title="genero"
              apiUrl={
                "https://green-bank-api.onrender.com/api/taxonomia/genero"
              }
            />
            <SelectSmall
              value={especiesId}
              setValue={setespeciesId}
              title="especie"
              apiUrl={
                "https://green-bank-api.onrender.com/api/taxonomia/especie"
              }
            />

            <SelectSmall
              value={subespecieId}
              setValue={setsubespecieId}
              title="subespecie"
              apiUrl={
                "https://green-bank-api.onrender.com/api/taxonomia/subespecie"
              }
            />
          </div>

          <CampoDeTexto value={nombreLocalNombre} setValue={setnombreLocalNombre} />
          <div className="modalButtons">
            <div onClick={handleEnviado} className="modalButtons__Anadir">
              <p>Añadir</p>
            </div>
            <div onClick={handleClose} className="modalButtons__Cancelar">
              <p>Cancelar</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
