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
import {
  fetchDrenajeSuelo,
  fetchColorjeSuelo,
  fetchPedregosidad,
  fetchTexturaSuelo,
  fetchErosionSuelo,
} from "./fetchData";

export const FormularioAccesionSuelo = (props) => {
  const [dataDrenajeSuelo, setdataDrenajeSuelo] = React.useState([]);
  const [dataColorSuelo, setdataColorSuelo] = React.useState([]);
  const [dataPedregosidad, setdataPedregosidad] = React.useState([]);
  const [dataTexturaSuelo, setdataTexturaSuelo] = React.useState([]);
  const [dataErosionSuelo, setdadataErosionSuelo] = React.useState([]);
  const { formik } = props;

  React.useEffect(() => {
    fetchDrenajeSuelo(setdataDrenajeSuelo);
    fetchColorjeSuelo(setdataColorSuelo);
    fetchPedregosidad(setdataPedregosidad);
    fetchTexturaSuelo(setdataTexturaSuelo);
    fetchErosionSuelo(setdadataErosionSuelo);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="drenajeSueloIdLabel">Drenaje Suelo</InputLabel>
          <Select
            id="drenajeSueloId"
            labelId="drenajeSueloIdLabel"
            name="drenajeSueloId"
            value={formik.values.drenajeSueloId}
            onChange={formik.handleChange}
          >
            {dataDrenajeSuelo.map((menuItem) => (
              <MenuItem
                key={menuItem.drenajeSueloId}
                value={menuItem.drenajeSueloId}
              >
                {menuItem.drenajeSueloNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="colorSueloIdLabel">Color Suelo</InputLabel>
          <Select
            id="colorSueloId"
            labelId="colorSueloIdLabel"
            name="colorSueloId"
            value={formik.values.colorSueloId}
            onChange={formik.handleChange}
          >
            {dataColorSuelo.map((menuItem) => (
              <MenuItem
                key={menuItem.colorSueloId}
                value={menuItem.colorSueloId}
              >
                {menuItem.colorSueloNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="pedregosidadIdLabel">Pedregosidad</InputLabel>
          <Select
            id="pedregosidadId"
            labelId="pedregosidadIdLabel"
            name="pedregosidadId"
            value={formik.values.pedregosidadId}
            onChange={formik.handleChange}
          >
            {dataPedregosidad.map((menuItem) => (
              <MenuItem
                key={menuItem.pedregosidadId}
                value={menuItem.pedregosidadId}
              >
                {menuItem.pedregosidadNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField
            id="sueloDetallePedregosidad"
            label="Pedregosidad (Otros)"
            name="sueloDetallePedregosidad"
            value={formik.values.sueloDetallePedregosidad}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="texturaSueloIdLabel">Textura Suelo</InputLabel>
          <Select
            id="texturaSueloId"
            labelId="texturaSueloIdLabel"
            name="texturaSueloId"
            value={formik.values.texturaSueloId}
            onChange={formik.handleChange}
          >
            {dataTexturaSuelo.map((menuItem) => (
              <MenuItem
                key={menuItem.texturaSueloId}
                value={menuItem.texturaSueloId}
              >
                {menuItem.texturaSueloNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField
            id="sueloDetalleTextura"
            label="Textura (Otros)"
            name="sueloDetalleTextura"
            value={formik.values.sueloDetalleTextura}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="erosionSueloIdLabel">Erosión Suelo</InputLabel>
          <Select
            id="erosionSueloId"
            labelId="erosionSueloIdLabel"
            name="erosionSueloId"
            value={formik.values.erosionSueloId}
            onChange={formik.handleChange}
          >
            {dataErosionSuelo.map((menuItem) => (
              <MenuItem
                key={menuItem.erosionSueloId}
                value={menuItem.erosionSueloId}
              >
                {menuItem.erosionSueloNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
