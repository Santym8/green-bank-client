import React from "react";
import { useState } from "react";
import "./TaxonomiaFamilias.css";
import Box from "@mui/material/Box";
import CampoDeTexto from "../../components/TextField/CampoDeTexto";
// Modal
import Modal from "@mui/material/Modal";

export const ModalUpdateFamilia = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [familiaNombre, setFamiliaNombre] = useState(props.familiaNombre);

  const handleEnviado = () => {
    const apiUrlFamilias =
      "https://green-bank-api.onrender.com/api/taxonomia/familia/" +
      props.familiaId;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        familiaNombre: familiaNombre,
      }),
    };
    fetch(apiUrlFamilias, requestOptions)
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
          <p className="modalContainer__Title">Actualizar Familia</p>
          <CampoDeTexto value={familiaNombre} setValue={setFamiliaNombre} />
          <div className="modalButtons">
            <div onClick={handleEnviado} className="modalButtons__Anadir">
              <p>Actualizar</p>
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