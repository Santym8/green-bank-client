import React from "react";
import {
  Grid,
  TextField,
  FormHelperText,
  InputLabel,
  FormControl,
} from "@mui/material";
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
    <Grid
      container
      spacing={3}
      sx={{ padding: "30px" }}
      justifyContent="center"
    >
      <Grid item xs={7}>
        <FormControl fullWidth>
          <TextField
            label="Temperatura (°C)"
            id="climaTemperatura"
            labelId="climaTemperaturaLabel"
            name="climaTemperatura"
            value={formik.values.climaTemperatura}
            onChange={formik.handleChange}
            type="number"
            variant="outlined"
          />
        </FormControl>
      </Grid>
      <Grid item xs={7}>
        <FormControl fullWidth>
          <TextField
            label="Humedad (%)"
            id="climaHumedad"
            labelId="climaHumedadLabel"
            name="climaHumedad"
            value={formik.values.climaHumedad}
            onChange={formik.handleChange}
            type="number"
          />
        </FormControl>
      </Grid>
      <Grid item xs={7}>
        <FormControl fullWidth>
          <InputLabel id="luzIdLabel">Luz</InputLabel>
          <Select
            label="Luz"
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
        </FormControl>
      </Grid>
    </Grid>
  );
};
