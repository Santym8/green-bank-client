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
  fetchFamilia,
  fetchGenero,
  fetchEspecie,
  fetchSubespecie,
  fetchNombreLocal,
} from "./fetchData";

export const FormularioAccesionTaxonomia = (props) => {
  const [dataFamilia, setdataFamilia] = React.useState([]);
  const [dataGenero, setdataGenero] = React.useState([]);
  const [dataEspecie, setdataEspecie] = React.useState([]);
  const [dataSubespecie, setSubespecie] = React.useState([]);
  const [dataNombreLocal, setdataNombreLocal] = React.useState([]);

  const { formik } = props;

  React.useEffect(() => {
    fetchFamilia(setdataFamilia);
    fetchGenero(setdataGenero, formik.values.familiaId);
    fetchEspecie(
      setdataEspecie,
      formik.values.familiaId,
      formik.values.generoId
    );
    fetchSubespecie(
      setSubespecie,
      formik.values.familiaId,
      formik.values.generoId,
      formik.values.especieId
    );
    fetchNombreLocal(
      setdataNombreLocal,
      formik.values.familiaId,
      formik.values.generoId,
      formik.values.especieId,
      formik.values.subespecieId
    );
  }, []);

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="familiaIdLabel">Familia</InputLabel>
          <Select
            fullWidth
            id="familiaId"
            labelId="familiaIdLabel"
            name="familiaId"
            label="Familia"
            value={formik.values.familiaId}
            onChange={formik.handleChange}
            onOpen={(event) => {
              fetchFamilia(setdataFamilia);
            }}
          >
            {dataFamilia.map((menuItem) => (
              <MenuItem key={menuItem.familiaId} value={menuItem.familiaId}>
                {menuItem.familiaNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="generoIdLabel">Genero</InputLabel>
          <Select
            fullWidth
            id="generoId"
            labelId="generoIdLabel"
            name="generoId"
            label="Genero"
            value={formik.values.generoId}
            onChange={formik.handleChange}
            onOpen={(event) => {
              fetchGenero(setdataGenero, formik.values.familiaId);
            }}
          >
            {dataGenero.map((menuItem) => (
              <MenuItem key={menuItem.generoId} value={menuItem.generoId}>
                {menuItem.generoNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="especieIdLabel">Especie</InputLabel>
          <Select
            fullWidth
            id="especieId"
            labelId="especieIdLabel"
            name="especieId"
            label="Especie"
            value={formik.values.especieId}
            onChange={formik.handleChange}
            onOpen={(event) => {
              fetchEspecie(
                setdataEspecie,
                formik.values.familiaId,
                formik.values.generoId
              );
            }}
          >
            {dataEspecie.map((menuItem) => (
              <MenuItem key={menuItem.especieId} value={menuItem.especieId}>
                {menuItem.especieNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="subespecieIdLabel">Subespecie</InputLabel>
          <Select
            fullWidth
            variant="outlined"
            labelId="subespecieIdLabel"
            name="subespecieId"
            label="Subespecie"
            value={formik.values.subespecieId}
            onChange={formik.handleChange}
            onOpen={(event) => {
              fetchSubespecie(
                setSubespecie,
                formik.values.familiaId,
                formik.values.generoId,
                formik.values.especieId
              );
            }}
          >
            {dataSubespecie.map((menuItem) => (
              <MenuItem
                key={menuItem.subespecieId}
                value={menuItem.subespecieId}
              >
                {menuItem.subespecieNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="nombreLocalLabel">Nombre Local</InputLabel>
          <Select
            labelId="nombreLocalLabel"
            id="nombreLocal"
            name="nombreLocalId"
            label="Nombre Local"
            error={Boolean(
              formik.touched.nombreLocalId && formik.errors.nombreLocalId
            )}
            value={formik.values.nombreLocalId}
            onChange={formik.handleChange}
            onOpen={(event) => {
              fetchNombreLocal(
                setdataNombreLocal,
                formik.values.familiaId,
                formik.values.generoId,
                formik.values.especieId,
                formik.values.subespecieId
              );
            }}
          >
            {dataNombreLocal.map((menuItem) => (
              <MenuItem
                key={menuItem.nombreLocalId}
                value={menuItem.nombreLocalId}
              >
                {menuItem.nombreLocalNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
