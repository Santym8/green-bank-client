import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import {} from "./fetchData";

export const FormularioAccesionFotos = (props) => {
  const { formik } = props;

  React.useEffect(() => {}, []);

  return (
    <Grid container spacing={2}>
      <Button variant="contained" component="label">
        Agregar Fotos
        <input
          type="file"
          hidden
          accept="image/*"
          id="fotos"
          name="fotos"
          onChange={(event) => {
            formik.setFieldValue("fotos", event.target.files);
          }}
          multiple
        />
      </Button>
    </Grid>
  );
};
