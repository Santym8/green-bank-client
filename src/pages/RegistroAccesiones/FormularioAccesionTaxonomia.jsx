import React from "react";
import { Grid, TextField, FormHelperText, InputLabel } from "@mui/material";
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

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <InputLabel id="familiaIdLabel">Familia</InputLabel>
        <Select
          id="familiaId"
          labelId="familiaIdLabel"
          name="familiaId"
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
      </Grid>
      <Grid item xs={12}>
        <InputLabel id="generoIdLabel">Genero</InputLabel>
        <Select
          id="generoId"
          labelId="generoIdLabel"
          name="generoId"
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
      </Grid>
      <Grid item xs={12}>
        <InputLabel id="especieIdLabel">Especie</InputLabel>
        <Select
          id="especieId"
          labelId="especieIdLabel"
          name="especieId"
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
      </Grid>
      <Grid item xs={12}>
        <InputLabel id="subespecieIdLabel">Subespecie</InputLabel>
        <Select
          labelId="subespecieIdLabel"
          name="subespecieId"
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
            <MenuItem key={menuItem.subespecieId} value={menuItem.subespecieId}>
              {menuItem.subespecieNombre}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12}>
        <InputLabel id="nombreLocalLabel">Nombre Local</InputLabel>
        <Select
          label="Nombre Local"
          labelId="nombreLocalLabel"
          name="nombreLocalId"
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
      </Grid>
    </Grid>
  );
};
