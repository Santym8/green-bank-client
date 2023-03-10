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
  fetchTopografia,
  fetchFisiografia,
  fetchVegetacionAlrededor,
  fetchFormaGeografica,
  fetchFormaPendiente,
} from "./fetchData";

export const FormularioAccesionTerreno = (props) => {
  const [dataTopografia, setdataTopografia] = React.useState([]);
  const [dataFisiografia, setdataFisiografia] = React.useState([]);
  const [dataVegetacionAlrededor, setdataVegetacionAlrededor] = React.useState(
    []
  );
  const [dataformaGeografica, setdataformaGeografica] = React.useState([]);
  const [dataformaPendiente, setdataformaPendiente] = React.useState([]);

  const { formik } = props;

  React.useEffect(() => {
    fetchTopografia(setdataTopografia);
    fetchFisiografia(setdataFisiografia);
    fetchVegetacionAlrededor(setdataVegetacionAlrededor);
    fetchFormaGeografica(setdataformaGeografica);
    fetchFormaPendiente(setdataformaPendiente);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="climaTemperaturaLabel">Topografía</InputLabel>
          <Select
            label="Topografía"
            id="topografiaId"
            labelId="topografiaIdLabel"
            name="topografiaId"
            value={formik.values.topografiaId}
            onChange={formik.handleChange}
          >
            {dataTopografia.map((menuItem) => (
              <MenuItem
                key={menuItem.topografiaId}
                value={menuItem.topografiaId}
              >
                {menuItem.topografiaNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField
            id="terrenoDetallesTopografia"
            label="Topografía (Otros)"
            name="terrenoDetallesTopografia"
            value={formik.values.terrenoDetallesTopografia}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="climaTemperaturaLabel">Fisiografía</InputLabel>
          <Select
            label="Fisiografía"
            id="fisiografiaId"
            labelId="fisiografiaIdLabel"
            name="fisiografiaId"
            value={formik.values.fisiografiaId}
            onChange={formik.handleChange}
          >
            {dataFisiografia.map((menuItem) => (
              <MenuItem
                key={menuItem.fisiografiaId}
                value={menuItem.fisiografiaId}
              >
                {menuItem.fisiografiaNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField
            id="terrenoDetallesFisiografia"
            label="Fisiografía (Otros)"
            name="terrenoDetallesFisiografia"
            value={formik.values.terrenoDetallesFisiografia}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="climaTemperaturaLabel">
            Vegetación Alrededor
          </InputLabel>
          <Select
            label="Vegetación Alrededor"
            id="vegetacionAlrededorId"
            labelId="vegetacionAlrededorIdLabel"
            name="vegetacionAlrededorId"
            value={formik.values.vegetacionAlrededorId}
            onChange={formik.handleChange}
          >
            {dataVegetacionAlrededor.map((menuItem) => (
              <MenuItem
                key={menuItem.vegetacionAlrededorId}
                value={menuItem.vegetacionAlrededorId}
              >
                {menuItem.vegetacionAlrededorNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField
            id="terrenoDetallesVegetacion"
            label="Vegetación (Otros)"
            name="terrenoDetallesVegetacion"
            value={formik.values.terrenoDetallesVegetacion}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="climaTemperaturaLabel">Forma Geográfica</InputLabel>
          <Select
            label="Forma Geográfica"
            id="formaGeograficaId"
            labelId="formaGeograficaIdLabel"
            name="formaGeograficaId"
            value={formik.values.formaGeograficaId}
            onChange={formik.handleChange}
          >
            {dataformaGeografica.map((menuItem) => (
              <MenuItem
                key={menuItem.formaGeograficaId}
                value={menuItem.formaGeograficaId}
              >
                {menuItem.formaGeograficaNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField
            id="terrenoDetallesFormaGeografica"
            label="Forma Geográfica (Otros)"
            name="terrenoDetallesFormaGeografica"
            value={formik.values.terrenoDetallesFormaGeografica}
            onChange={formik.handleChange}
            variant="outlined"
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="formaPendienteIdLabel">Forma Pendiente</InputLabel>
          <Select
            label="Forma Pendiente"
            id="formaPendienteId"
            labelId="formaPendienteIdLabel"
            name="formaPendienteId"
            value={formik.values.formaPendienteId}
            onChange={formik.handleChange}
          >
            {dataformaPendiente.map((menuItem) => (
              <MenuItem
                key={menuItem.formaPendienteId}
                value={menuItem.formaPendienteId}
              >
                {menuItem.formaPendienteNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={3} style={{ display: "flex", alignItems: "center" }}>
        <h4>Aspecto Pendiente (Orientación)</h4>
      </Grid>

      <Grid item xs={2}>
        <FormControl fullWidth>
          <TextField
            id="terrenoAspectoPendienteNorte"
            label="Norte"
            name="terrenoAspectoPendienteNorte"
            value={formik.values.terrenoAspectoPendienteNorte}
            onChange={formik.handleChange}
            variant="outlined"
            type="number"
          />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl fullWidth>
          <TextField
            id="terrenoAspectoPendienteSur"
            label="Sur"
            name="terrenoAspectoPendienteSur"
            value={formik.values.terrenoAspectoPendienteSur}
            onChange={formik.handleChange}
            variant="outlined"
            type="number"
          />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl fullWidth>
          <TextField
            id="terrenoAspectoPendienteEste"
            label="Este"
            name="terrenoAspectoPendienteEste"
            value={formik.values.terrenoAspectoPendienteEste}
            onChange={formik.handleChange}
            variant="outlined"
            type="number"
          />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl fullWidth>
          <TextField
            id="terrenoAspectoPendienteOeste"
            label="Oeste"
            name="terrenoAspectoPendienteOeste"
            value={formik.values.terrenoAspectoPendienteOeste}
            onChange={formik.handleChange}
            variant="outlined"
            type="number"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
