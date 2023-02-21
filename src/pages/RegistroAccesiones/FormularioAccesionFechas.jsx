import React from "react";
import { Grid, TextField, FormControl } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { fetchInstitutoColector } from "./fetchData";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {} from "./fetchData";

export const FormularioAccesionFechas = (props) => {
  const { formik } = props;
  const [dataInstitutoColector, setdataInstitutoColector] = React.useState([]);

  React.useEffect(() => {
    fetchInstitutoColector(setdataInstitutoColector);
  }, []);

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      sx={{ padding: "20px" }}
    >
      <Grid item xs={6}>
        <FormControl fullWidth>
          <DesktopDatePicker
            id="fechaSiembra"
            name="fechaSiembra"
            label="Fecha de Siembra"
            inputFormat="DD/MM/YYYY"
            value={formik.values.fechaSiembra}
            onChange={(value) => {
              formik.setFieldValue("fechaSiembra", value);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <DesktopDatePicker
            id="fechaFloracion"
            name="fechaFloracion"
            label="Fecha de Floración"
            inputFormat="DD/MM/YYYY"
            value={formik.values.fechaFloracion}
            onChange={(value) => {
              formik.setFieldValue("fechaFloracion", value);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <DesktopDatePicker
            id="fechaFructificacion"
            name="fechaFructificacion"
            label="Fecha de Fructificación"
            inputFormat="DD/MM/YYYY"
            value={formik.values.fechaFructificacion}
            onChange={(value) => {
              formik.setFieldValue("fechaFructificacion", value);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <DesktopDatePicker
            id="fechaCosechas"
            name="fechaCosechas"
            label="Fecha de Cosecha"
            inputFormat="DD/MM/YYYY"
            value={formik.values.fechaCosechas}
            onChange={(value) => {
              formik.setFieldValue("fechaCosechas", value);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
