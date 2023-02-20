import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { formInitialValues, validacionDatos } from "./dataForm";
import { FormularioAccesionTaxonomia } from "./FormularioAccesionTaxonomia";
import * as Yup from "yup";

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button,
} from "@mui/material";

const steps = ["Taxonomía", "Recolección", "Review and Submit"];

const FormularioRegistroAccesiones = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const formik = useFormik({
    initialValues: {
      formInitialValues,
    },

    validationSchema: Yup.object().shape(validacionDatos),
    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
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
      // return <PersonalInfo formik={formik} />;
      case 2:
      // return <ReviewInfo formik={formik} />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        padding: 2,
      }}
    >
      <Stepper activeStep={activeStep} orientation="horizontal">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid item xs={12} sx={{ padding: "20px" }}>
          {formContent(activeStep)}
        </Grid>
        {formik.errors.submit && (
          <Grid item xs={12}>
            <FormHelperText error>{formik.errors.submit}</FormHelperText>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button onClick={formik.handleSubmit}>Submit</Button>
          ) : (
            <Button onClick={formik.handleSubmit}>Next</Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormularioRegistroAccesiones;
