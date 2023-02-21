import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import {} from "./fetchData";

export const FormularioAccesionFotos = (props) => {
  const { formik, formData } = props;

  React.useEffect(() => {}, []);

  return (
    <Grid container spacing={2}>
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden />
      </Button>
    </Grid>
  );
};
