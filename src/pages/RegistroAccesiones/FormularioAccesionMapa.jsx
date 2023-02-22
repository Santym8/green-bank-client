import React from "react";
import GoogleMapReact from "google-map-react";
import { Grid, Container } from "@mui/material";
import { Transform } from "@mui/icons-material";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const FormularioAccesionMapa = (props) => {
  const { formik } = props;
  const defaultProps = {
    center: {
      lat: formik.values.ubicacionRecoleccionGrupoLatitud,
      lng: formik.values.ubicacionRecoleccionGrupoLongitud,
    },
    zoom: 11,
  };

  return (
    <Grid container spacing={1} sx={{ width: "100%" }}>
      <Grid item xs={12}>
        <h3 style={{ textAlign: "center" }}>
          Selecciona el punto de Recoleccón 
        </h3>
      </Grid>

      <Grid item xs={12}>
        <div style={{ height: "375px", width: "100%" }}>
          <GoogleMapReact
            onClick={(e) => {
              formik.setFieldValue("ubicacionRecoleccionGrupoLatitud", e.lat);
              formik.setFieldValue("ubicacionRecoleccionGrupoLongitud", e.lng);
            }}
            bootstrapURLKeys={{
              key: "AIzaSyCYbJG1Ki5KTSl4tfK0PDiKpiw0X46CtOI",
            }}
            defaultCenter={{ lat: 0.358981, lng: -78.111094 }}
            defaultZoom={20}
          >
            <Marker
              lat={formik.values.ubicacionRecoleccionGrupoLatitud}
              lng={formik.values.ubicacionRecoleccionGrupoLongitud}
            />
          </GoogleMapReact>
        </div>
      </Grid>
    </Grid>
  );
};

const Marker = (props) => {
  return (
    <div
      style={{
        width: "150px",
        display: "flex",
        fontSize: "20px",
        justifyContent: "center",
      }}
    >
      <span className="material-symbols-outlined">location_on</span>
      Punto de recolección
    </div>
  );
};
