import React from "react";
import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import {} from "./fetchData";

export const FormularioAccesionFotos = (props) => {
  const { formik } = props;
  const [imagenCargadaMensaje, setimagenCargadaMensaje] =
    useState("Agregar Fotos");

  React.useEffect(() => {}, []);

  return (
    <Grid container justifyContent="center">
      <Button
        variant="contained"
        component="label"
        style={{ width: "300px", height: "100px", backgroundColor: "#076907" }}
      >
        {imagenCargadaMensaje}
        <input
          type="file"
          hidden
          accept="image/*"
          id="fotos"
          name="fotos"
          onChange={(event) => {
            formik.setFieldValue("fotos", event.target.files);
            setimagenCargadaMensaje("Imagenes Cargadas con Éxito!");
          }}
          multiple
        />
      </Button>
    </Grid>
  );
};
