import React from "react";
import { useState } from "react";
import './TaxonomiaNombresLocales.css';
import Box from "@mui/material/Box";
import CampoDeTexto from "../../components/TextField/CampoDeTexto";
import SelectSmall from "../../components/SelectSmall/SelectSmall";
// Modal
import Modal from "@mui/material/Modal";

export const ModalUpdateNombresLocales = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [familiaId, setFamiliaId] = useState(props.familiaId);
  const [nombreLocalNombre, setnombreLocalNombre] = useState(props.nombreLocalNombre);
  const [generoId, setGeneroId] = useState(props.generoId);
  const [especieId, setespecieId] = useState(props.especieId);
  const [subespecieId, setsubespecieId] = useState(props.subespecieId);

  console.log(props.familiaId);

  const handleEnviado = () => {
    const apiUrlNombreLocal =
      "https://green-bank-api.onrender.com/api/taxonomia/nombre-local/" +
      props.nombreLocalId;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombreLocalNombre: nombreLocalNombre,
        subespecieId: subespecieId,
      }),
    };
    fetch(apiUrlNombreLocal, requestOptions)
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
    <>
      <span class="material-symbols-outlined" onClick={handleOpen}>
        edit
      </span>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalContainer" sx={style}>
          <p className="modalContainer__Title">Actualizar Nombre Local</p>
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
              value={especieId}
              setValue={setespecieId}
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
    </>
  );
};
