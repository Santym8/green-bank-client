import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

function CampoDeTexto({ idTexfield, value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      className="modalContainer__Text"
      fullWidth="true"
    ></TextField>
  );
}

export default CampoDeTexto;
