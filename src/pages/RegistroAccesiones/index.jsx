import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as Yup from "yup";
import axios from "axios";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button,
  Container,
} from "@mui/material";
import { formInitialValues, validacionDatos } from "./dataForm";
import { FormularioAccesionTaxonomia } from "./FormularioAccesionTaxonomia";
import { FormularioAccesionRecoleccion } from "./FormularioAccesionRecoleccion";
import { FormularioAccesionSuelo } from "./FormularioAccesionSuelo";
import { FormularioAccesionClima } from "./FormularioAccesionClima";
import { FormularioAccesionTerreno } from "./FormularioAccesionTerreno";
import { FormularioAccesionFechas } from "./FormularioAccesionFechas";
import { FormularioAccesionInformacion } from "./FormularioAccesionInformacion";
import { FormularioAccesionInformacionSegundaParte } from "./FormularioAccesionInformacionSegundaParte";
import { FormularioAccesionFotos } from "./FormularioAccesionFotos";
const steps = [
  "Taxonomía",
  "Recolección",
  "Ubicación",
  "Suelo",
  "Clima",
  "Terreno",
  "Fechas",
  "Información",
  "Información Adicional",
  "Fotos",
];

const FormularioRegistroAccesiones = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: Yup.object().shape(validacionDatos),
    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
        const baseUrl = "https://green-bank-api.onrender.com";
        axios
          .post(baseUrl + "/api/accesiones/pasaporte", values, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            if (res.status == 200) {
              // Redireccionar a tabla accesiones
            }
            if (res.status == 400) {
              window.alert(res.data);
            }
          });

        //-----------Hacer POST---------
        console.log(JSON.stringify(values, null, 2));
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    },
  });

  const formContent = (step) => {
    switch (step) {
      case 0:
        return <FormularioAccesionTaxonomia formik={formik} />;
      case 1:
        return <FormularioAccesionRecoleccion formik={formik} />;
      case 3:
        return <FormularioAccesionSuelo formik={formik} />;
      case 4:
        return <FormularioAccesionClima formik={formik} />;
      case 5:
        return <FormularioAccesionTerreno formik={formik} />;
      case 6:
        return <FormularioAccesionFechas formik={formik} />;
      case 7:
        return <FormularioAccesionInformacion formik={formik} />;
      case 8:
        return <FormularioAccesionInformacionSegundaParte formik={formik} />;
      case 9:
        return <FormularioAccesionFotos formik={formik} />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <Container xs={{ width: "100%", height: "100%" }}>
      <Container>
        <Stepper activeStep={activeStep} orientation="horizontal">
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>

      <Container
        sx={{
          padding: "50px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {formContent(activeStep)}
        </LocalizationProvider>
      </Container>

      <Grid container justifyContent="center">
        <Button
          variant="contained"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{
            margin: "5px",
            backgroundColor: "#003300",
            ":hover": { backgroundColor: "#076907" },
          }}
        >
          Anterior
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button
            variant="contained"
            onClick={formik.handleSubmit}
            sx={{
              margin: "5px",
              backgroundColor: "#003300",
              ":hover": { backgroundColor: "#076907" },
            }}
          >
            Enviar
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={formik.handleSubmit}
            sx={{
              margin: "5px",
              backgroundColor: "#003300",
              ":hover": { backgroundColor: "#076907" },
            }}
          >
            Siguiente
          </Button>
        )}
      </Grid>
    </Container>
  );
};

export default FormularioRegistroAccesiones;
