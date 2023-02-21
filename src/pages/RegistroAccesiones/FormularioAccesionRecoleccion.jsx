import React from "react";
import { Grid, TextField, InputLabel, FormControl } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { fetchInstitutoColector } from "./fetchData";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {} from "./fetchData";

export const FormularioAccesionRecoleccion = (props) => {
  const { formik } = props;
  const [dataInstitutoColector, setdataInstitutoColector] = React.useState([]);

  React.useEffect(() => {
    fetchInstitutoColector(setdataInstitutoColector);
  }, []);

  return (
    <Grid container spacing={5}>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="recoleccionNombre"
          label="Nombre Recolector"
          name="recoleccionNombre"
          value={formik.values.recoleccionNombre}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="recoleccionApellidos"
          label="Apellido Recolector"
          name="ecoleccionApellidos"
          value={formik.values.recoleccionApellidos}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <DesktopDatePicker
            fullWidth
            id="recoleccionFecha"
            name="recoleccionFecha"
            label="Fecha Recolección"
            inputFormat="DD/MM/YYYY"
            value={formik.values.recoleccionFecha}
            onChange={(value) => {
              formik.setFieldValue("recoleccionFecha", value);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id="institutoColectorIdLabel">
            Instituto Colector
          </InputLabel>
          <Select
            fullWidth
            id="institutoColectorId"
            label="Instituto Colector"
            name="institutoColectorId"
            value={formik.values.institutoColectorId}
            onChange={formik.handleChange}
          >
            {dataInstitutoColector.map((menuItem) => (
              <MenuItem
                key={menuItem.institutoColectorId}
                value={menuItem.institutoColectorId}
              >
                {menuItem.institutoColectorNombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="ubicacionRecoleccionGrupoEtnico"
          label="Grupo Etnico"
          name="ubicacionRecoleccionGrupoEtnico"
          value={formik.values.ubicacionRecoleccionGrupoEtnico}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="ubicacionRecoleccionGrupoIdioma"
          label="Idioma"
          name="ubicacionRecoleccionGrupoIdioma"
          value={formik.values.ubicacionRecoleccionGrupoIdioma}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="ubicacionRecoleccionGrupoPais"
          label="Pais"
          name="ubicacionRecoleccionGrupoPais"
          value={formik.values.ubicacionRecoleccionGrupoPais}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="ubicacionRecoleccionGrupoProvincia"
          label="Provincia"
          name="ubicacionRecoleccionGrupoProvincia"
          value={formik.values.ubicacionRecoleccionGrupoProvincia}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="ubicacionRecoleccionGrupoCanton"
          label="Cantón"
          name="ubicacionRecoleccionGrupoCanton"
          value={formik.values.ubicacionRecoleccionGrupoCanton}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="ubicacionRecoleccionGrupoParroquia"
          label="Parroquia"
          name="ubicacionRecoleccionGrupoParroquia"
          value={formik.values.ubicacionRecoleccionGrupoParroquia}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="ubicacionRecoleccionGrupoLocalidad"
          label="Localidad"
          name="ubicacionRecoleccionGrupoLocalidad"
          value={formik.values.ubicacionRecoleccionGrupoLocalidad}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="ubicacionRecoleccionGrupoNombrePredio"
          label="Nombre Predio"
          name="ubicacionRecoleccionGrupoNombrePredio"
          value={formik.values.ubicacionRecoleccionGrupoNombrePredio}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="ubicacionRecoleccionGrupoPropietario"
          label="Nombre Propietario"
          name="ubicacionRecoleccionGrupoPropietario"
          value={formik.values.ubicacionRecoleccionGrupoPropietario}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="ubicacionRecoleccionGrupoLocalizacion"
          label="Localización"
          name="ubicacionRecoleccionGrupoLocalizacion"
          value={formik.values.ubicacionRecoleccionGrupoLocalizacion}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};
