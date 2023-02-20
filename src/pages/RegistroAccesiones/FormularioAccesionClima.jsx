import React from "react";
import { Grid, TextField, FormHelperText, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { fetchLuz } from "./fetchData";

export const FormularioAccesionClima = (props) => {
  const [dataLuz, setdataLuz] = React.useState([]);

  const { formik } = props;

  React.useEffect(() => {
    fetchLuz(setdataLuz);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <InputLabel id="climaTemperaturaLabel">Temperatura (°C)</InputLabel>
        <TextField
          id="climaTemperatura"
          labelId="climaTemperaturaLabel"
          name="climaTemperatura"
          value={formik.values.climaTemperatura}
          onChange={formik.handleChange}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <InputLabel id="climaHumedadLabel">Humedad (%)</InputLabel>
        <TextField
          id="climaHumedad"
          labelId="climaHumedadLabel"
          name="climaHumedad"
          value={formik.values.climaHumedad}
          onChange={formik.handleChange}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <InputLabel id="luzIdLabel">Luz</InputLabel>
        <Select
          id="luzId"
          labelId="luzIdLabel"
          name="luzId"
          value={formik.values.luzId}
          onChange={formik.handleChange}
        >
          {dataLuz.map((menuItem) => (
            <MenuItem key={menuItem.luzId} value={menuItem.luzId}>
              {menuItem.luzNombre}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};
