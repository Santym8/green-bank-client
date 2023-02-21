import React from "react";
import { Grid, TextField, FormHelperText, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  fetchEstadoGermoplasma,
  fetchFuenteColeccion,
  fetchTipoMuestraColectada,
  fetchPartePlantaUtilizada,
  fetchPracticaCultural,
  fetchUsoMaterial,
} from "./fetchData";

export const FormularioAccesionInformacion = (props) => {
  const [dataEstadoGermoplasma, setEstadoGermoplasma] = React.useState([]);
  const [dataFuenteColeccion, setdataFuenteColeccion] = React.useState([]);
  const [dataTipoMuestraColectada, setdataTipoMuestraColectada] =
    React.useState([]);
  const [dataPartePlantaUtilizada, setdataPartePlantaUtilizada] =
    React.useState([]);
  const [dataPracticaCultural, setdataPracticaCultural] = React.useState([]);
  const [dataUsoMaterial, setdataUsoMaterial] = React.useState([]);
  const { formik } = props;

  React.useEffect(() => {
    fetchEstadoGermoplasma(setEstadoGermoplasma);
    fetchFuenteColeccion(setdataFuenteColeccion);
    fetchTipoMuestraColectada(setdataTipoMuestraColectada);
    fetchPartePlantaUtilizada(setdataPartePlantaUtilizada);
    fetchPracticaCultural(setdataPracticaCultural);
    fetchUsoMaterial(setdataUsoMaterial);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <InputLabel id="estadoGermoplasmaIdLabel">
          Estado Germoplasma
        </InputLabel>
        <Select
          id="estadoGermoplasmaId"
          labelId="estadoGermoplasmaIdLabel"
          name="estadoGermoplasmaId"
          value={formik.values.estadoGermoplasmaId}
          onChange={formik.handleChange}
        >
          {dataEstadoGermoplasma.map((menuItem) => (
            <MenuItem
              key={menuItem.estadoGermoplasmaId}
              value={menuItem.estadoGermoplasmaId}
            >
              {menuItem.estadoGermoplasmaNombre}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="informacionDetallesEstado"
          label="Estado (Otros)"
          name="informacionDetallesEstado"
          value={formik.values.informacionDetallesEstado}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12}>
        <InputLabel id="fuenteColeccionIdLabel">Fuente Colección</InputLabel>
        <Select
          id="fuenteColeccionId"
          labelId="fuenteColeccionIdLabel"
          name="fuenteColeccionId"
          value={formik.values.fuenteColeccionId}
          onChange={formik.handleChange}
        >
          {dataFuenteColeccion.map((menuItem) => (
            <MenuItem
              key={menuItem.fuenteColeccionId}
              value={menuItem.fuenteColeccionId}
            >
              {menuItem.fuenteColeccionNombre}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="informacionDetallesFuenteColeccion"
          label="Fuente (Otros)"
          name="informacionDetallesFuenteColeccion"
          value={formik.values.informacionDetallesFuenteColeccion}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12}>
        <InputLabel id="tipoMuestraColectadaIdLabel">
          Tipo Muestra Colectada
        </InputLabel>
        <Select
          id="tipoMuestraColectadaId"
          labelId="tipoMuestraColectadaIdLabel"
          name="tipoMuestraColectadaId"
          value={formik.values.tipoMuestraColectadaId}
          onChange={formik.handleChange}
        >
          {dataTipoMuestraColectada.map((menuItem) => (
            <MenuItem
              key={menuItem.tipoMuestraColectadaId}
              value={menuItem.tipoMuestraColectadaId}
            >
              {menuItem.tipoMuestraColectadaNombre}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="informacionDetallesTipoMuestraColectada"
          label="Tipo Muestra (Otros)"
          name="informacionDetallesTipoMuestraColectada"
          value={formik.values.informacionDetallesTipoMuestraColectada}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12}>
        <InputLabel id="partePlantaUtilizadaIdLabel">
          Parte Planta Utilizada
        </InputLabel>
        <Select
          id="partePlantaUtilizadaId"
          labelId="partePlantaUtilizadaIdLabel"
          name="partePlantaUtilizadaId"
          value={formik.values.partePlantaUtilizadaId}
          onChange={formik.handleChange}
        >
          {dataPartePlantaUtilizada.map((menuItem) => (
            <MenuItem
              key={menuItem.partePlantaUtilizadaId}
              value={menuItem.partePlantaUtilizadaId}
            >
              {menuItem.partePlantaUtilizadaNombre}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="informacionDetallePartePlantaUtilizada"
          label="Parte Planta (Otros)"
          name="informacionDetallePartePlantaUtilizada"
          value={formik.values.informacionDetallePartePlantaUtilizada}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>


      <Grid item xs={12}>
        <InputLabel id="practicaCulturalIdLabel">Practica Cultural</InputLabel>
        <Select
          id="practicaCulturalId"
          labelId="practicaCulturalIdLabel"
          name="practicaCulturalId"
          value={formik.values.practicaCulturalId}
          onChange={formik.handleChange}
        >
          {dataPracticaCultural.map((menuItem) => (
            <MenuItem
              key={menuItem.practicaCulturalId}
              value={menuItem.practicaCulturalId}
            >
              {menuItem.practicaCulturalNombre}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="informacionDetallePracticaCultural"
          label="Practicas (Otros)"
          name="informacionDetallePracticaCultural"
          value={formik.values.informacionDetallePracticaCultural}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>

      

     
      <Grid item xs={12}>
        <InputLabel id="usoMaterialIdLabel">Uso Material</InputLabel>
        <Select
          id="usoMaterialId"
          labelId="usoMaterialIdLabel"
          name="usoMaterialId"
          value={formik.values.usoMaterialId}
          onChange={formik.handleChange}
        >
          {dataUsoMaterial.map((menuItem) => (
            <MenuItem
              key={menuItem.usoMaterialId}
              value={menuItem.usoMaterialId}
            >
              {menuItem.usoMaterialNombre}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="informacionUsoMaterial"
          label="Uso Material (Otros)"
          name="informacionUsoMaterial"
          value={formik.values.informacionUsoMaterial}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};
