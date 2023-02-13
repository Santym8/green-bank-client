import React from "react";
import { Link } from "react-router-dom";
import FilledInput from "@mui/material/FilledInput";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./login.css";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container-login">
      <div className="img-plant-login">
        <img
          className="img-plant-login__img"
          src={require("./img/plant-login.jpg")}
          alt="planta"
        />
      </div>
      <div className="login-form">
        <div className="login-form__back">
          <Link to="/" className="login-form__back__link">
            <span className="material-symbols-outlined login-form__back__icon">
              arrow_back
            </span>
          </Link>
        </div>
        <div className="login-form__title">
          <h1>GREENBANK</h1>
        </div>
        <div className="login-form__form">
          <div className="login-form__form__field">
            <p>Coreo Electrónico</p>
            <TextField autoFocus="true" fullWidth="true" type="email" />
          </div>
          <div className="login-form__form__field">
            <p>Contraseña</p>
            <TextField
              fullWidth="true"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className="login-form__forgot-password">
          <Link to="/">Olivé mi Contraseña</Link>
        </div>
        <div className="login-form__button">
          <Link to="/accesiones" className="login-form__button_button">
            <span className="ogin-form__button_button__text">Ingresar</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
