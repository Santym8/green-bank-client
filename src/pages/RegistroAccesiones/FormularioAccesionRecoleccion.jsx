import React from "react";
import { Grid, TextField } from "@mui/material";
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="recoleccionNombre"
          label="Nombre Recolector"
          name="recoleccionNombre"
          value={formik.values.recoleccionNombre}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          id="recoleccionApellidos"
          label="Apellido Recolector"
          name="ecoleccionApellidos"
          value={formik.values.recoleccionApellidos}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <DesktopDatePicker
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
        <Select
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
        <TextField
          id="ubicacionRecoleccionGrupoEtnico"
          label="Grupo Etnico"
          name="ubicacionRecoleccionGrupoEtnico"
          value={formik.values.ubicacionRecoleccionGrupoEtnico}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          id="ubicacionRecoleccionGrupoIdioma"
          label="Idioma"
          name="ubicacionRecoleccionGrupoIdioma"
          value={formik.values.ubicacionRecoleccionGrupoIdioma}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          id="ubicacionRecoleccionGrupoPais"
          label="Pais"
          name="ubicacionRecoleccionGrupoPais"
          value={formik.values.ubicacionRecoleccionGrupoPais}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          id="ubicacionRecoleccionGrupoProvincia"
          label="Provincia"
          name="ubicacionRecoleccionGrupoProvincia"
          value={formik.values.ubicacionRecoleccionGrupoProvincia}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          id="ubicacionRecoleccionGrupoCanton"
          label="Cantón"
          name="ubicacionRecoleccionGrupoCanton"
          value={formik.values.ubicacionRecoleccionGrupoCanton}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          id="ubicacionRecoleccionGrupoParroquia"
          label="Parroquia"
          name="ubicacionRecoleccionGrupoParroquia"
          value={formik.values.ubicacionRecoleccionGrupoParroquia}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          id="ubicacionRecoleccionGrupoLocalidad"
          label="Localidad"
          name="ubicacionRecoleccionGrupoLocalidad"
          value={formik.values.ubicacionRecoleccionGrupoLocalidad}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          id="ubicacionRecoleccionGrupoNombrePredio"
          label="Nombre Predio"
          name="ubicacionRecoleccionGrupoNombrePredio"
          value={formik.values.ubicacionRecoleccionGrupoNombrePredio}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          id="ubicacionRecoleccionGrupoPropietario"
          label="Nombre Propietario"
          name="ubicacionRecoleccionGrupoPropietario"
          value={formik.values.ubicacionRecoleccionGrupoPropietario}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
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
