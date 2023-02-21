import React from "react";
import {
  Grid,
  TextField,
  FormHelperText,
  InputLabel,
  FormControlLabel,
  Checkbox,
  FormControl,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  fetchMetodoMuestreo,
  fetchFrecuenciaMuestra,
  fetchEstadoFenologicoPoblacion,
} from "./fetchData";

export const FormularioAccesionInformacionSegundaParte = (props) => {
  const [dataMetodoMuestreo, setdataMetodoMuestreo] = React.useState([]);
  const [dataFrecuenciaMuestra, setdataFrecuenciaMuestra] = React.useState([]);
  const [dataEstadoFenologicoPoblacion, setdataEstadoFenologicoPoblacion] =
    React.useState([]);
  const { formik } = props;

  React.useEffect(() => {
    fetchMetodoMuestreo(setdataMetodoMuestreo);
    fetchFrecuenciaMuestra(setdataFrecuenciaMuestra);
    fetchEstadoFenologicoPoblacion(setdataEstadoFenologicoPoblacion);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <TextField
            id="informacionPlantasMuestradas"
            label="Plantas Muestradas"
            name="informacionPlantasMuestradas"
            value={formik.values.informacionPlantasMuestradas}
            onChange={formik.handleChange}
            variant="outlined"
            type="number"
          />
        </FormControl>
      </Grid>

      <Grid item xs={3}>
        <FormControl fullWidth>
          <TextField
            id="informacionAreaMuestrada"
            label="Área Muestrada"
            name="informacionAreaMuestrada"
            value={formik.values.informacionAreaMuestrada}
            onChange={formik.handleChange}
            variant="outlined"
            type="number"
          />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControlLabel
          control={
            <Checkbox
              id="informacionPoblacionAislada"
              name="informacionPoblacionAislada"
              onChange={(event) => {
                const { name, checked } = event.target;
                formik.setFieldValue(name, checked);
              }}
            />
          }
          label="Población Aislada"
        />
      </Grid>

      <Grid item xs={2}>
        <FormControlLabel
          control={
            <Checkbox
              id="informacionCultivosCerca"
              name="informacionCultivosCerca"
              onChange={(event) => {
                const { name, checked } = event.target;
                formik.setFieldValue(name, checked);
              }}
            />
          }
          label="Cultivos Cerca"
        />
      </Grid>

      <Grid item xs={2}>
        <FormControlLabel
          control={
            <Checkbox
              id="informacionEjemplarHerbario"
              name="informacionEjemplarHerbario"
              onChange={(event) => {
                const { name, checked } = event.target;
                formik.setFieldValue(name, checked);
              }}
            />
          }
          label="Ejemplar de Herbario"
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel id="metodoMuestreoIdLabel">Metodo de Muestreo</InputLabel>
          <Select
            label="Metodo de Muestreo"
            id="metodoMuestreoId"
            labelId="metodoMuestreoIdLabel"
            name="metodoMuestreoId"
            value={formik.values.metodoMuestreoId}
            onChange={formik.handleChange}
          >
            {dataMetodoMuestreo.map((menuItem) => (
              <MenuItem
                key={menuItem.metodoMuestreoId}
                value={menuItem.metodoMuestreoId}
              >
                {menuItem.metodoMuestreoNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel id="frecuenciaMuestraIdLabel">
            Frecuencia de Muestra
          </InputLabel>
          <Select
            label="Frecuencia de Muestra"
            id="frecuenciaMuestraId"
            labelId="frecuenciaMuestraIdLabel"
            name="frecuenciaMuestraId"
            value={formik.values.frecuenciaMuestraId}
            onChange={formik.handleChange}
          >
            {dataFrecuenciaMuestra.map((menuItem) => (
              <MenuItem
                key={menuItem.frecuenciaMuestraId}
                value={menuItem.frecuenciaMuestraId}
              >
                {menuItem.frecuenciaMuestraNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel id="estadoFenologicoPoblacionIdLabel">
            Estado Fenológico de la Población
          </InputLabel>
          <Select
            label="Estado Fenológico de la Población"
            id="estadoFenologicoPoblacionId"
            labelId="estadoFenologicoPoblacionIdLabel"
            name="estadoFenologicoPoblacionId"
            value={formik.values.estadoFenologicoPoblacionId}
            onChange={formik.handleChange}
          >
            {dataEstadoFenologicoPoblacion.map((menuItem) => (
              <MenuItem
                key={menuItem.estadoFenologicoPoblacionId}
                value={menuItem.estadoFenologicoPoblacionId}
              >
                {menuItem.estadoFenologicoPoblacionNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="informacionAsociasionEspeciesSilvestres"
            label="Asociación con Especies Silvestres"
            name="informacionAsociasionEspeciesSilvestres"
            value={formik.values.informacionAsociasionEspeciesSilvestres}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="informacionPlagasEnfermedades"
            label="Plagas y Enfermedades"
            name="informacionPlagasEnfermedades"
            value={formik.values.informacionPlagasEnfermedades}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="observacionContenido"
            label="Observación"
            name="observacionContenido"
            value={formik.values.observacionContenido}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
