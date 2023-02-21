import React from 'react';
import HeadPrivateLayout from '../../components/HeadPrivateLayout/HeadPrivateLayout';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Pasaportes.css";
import Carousel from '../../components/Carousel/Carousel';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
function Pasaporte() {
  const slides = [
    { url: "https://cdn.pixabay.com/photo/2017/06/08/00/37/cactus-parodia-magnifica-2382140_1280.jpg", title: "boat" },
    { url: "https://cdn.pixabay.com/photo/2021/10/26/12/23/cactus-6743531_1280.jpg", title: "forest" },
    { url: "https://cdn.pixabay.com/photo/2014/07/29/08/55/cactus-404362_1280.jpg", title: "city" },
  ];
  return (
    <>
      <div className='headPrivateContainer'>
        <HeadPrivateLayout
          title='Pasaporte de Accesión'
          icon='Compost'
          user='FL'
        />
      </div>
      <div className='PasaporteContainer'>
        <div className="PasaporteHead">
          <Link title='Regresar' to='/accesiones/detalles/accesion'>
            <Stack spacing={2} direction="row">
              <Button variant="text" sx={{ color: 'black' }}>
                <ArrowBackIcon
                  sx={{
                    color: 'black',
                    marginRight: 2,
                    fontSize: 30
                  }}
                />
                <p style={{ fontSize: '1.4rem' }}>Atrás</p>
              </Button>
            </Stack>
          </Link>
        </div>
        <div className='PasaporteTitle'>
          <p className='PasaporteTitle__nombre'>ALOE VERA</p>
          <p className='PasaporteTitle__id'>ID:ABCD1234</p>
        </div>
        <div className="PasaporteInfo">
          <div className="Pasaporte__div TaxonomiaContainer">
            <p className='ProtoloLabel__title'>TAXONOMÍA</p>
            <p className='ProtoloLabel'>Familia: </p>
            <p className='ProtoloLabel'>Género: </p>
            <p className='ProtoloLabel'>Especie: </p>
            <p className='ProtoloLabel'>Subespecie: </p>
            <p className='ProtoloLabel'>Nombre local: </p>
          </div>
          <div className="Pasaporte__div UbicacionContainer">
            <p className='ProtoloLabel__title'>UBICACIÓN RECOLECCIÓN</p>
            <p className='ProtoloLabel'>Grupo Étnico: </p>
            <p className='ProtoloLabel'>Idioma: </p>
            <p className='ProtoloLabel'>País: </p>
            <p className='ProtoloLabel'>Provincia: </p>
            <p className='ProtoloLabel'>Cantón: </p>
            <p className='ProtoloLabel'>Parroquia: </p>
            <p className='ProtoloLabel'>Localidad: </p>
            <p className='ProtoloLabel'>Nombre del Predio: </p>
            <p className='ProtoloLabel'>Propietario: </p>
            <p className='ProtoloLabel'>Localización: </p>
            <p className='ProtoloLabel'>Latitud: </p>
            <p className='ProtoloLabel'>Longitud: </p>
            <p className='ProtoloLabel'>Altitud: </p>
          </div>
          <div className="Pasaporte__div MapsContainer">
            <p className='ProtoloLabel__title'>MAPS</p>
            <div className="mapa">
              <GoogleMap
                onLoad={map => {
                  const bounds = new window.google.maps.LatLngBounds();
                  map.fitBounds(bounds);
                }}
                onUnmount={map => {
                  // do your stuff before map is unmounted
                }}
              />
            </div>
          </div>
          <div className="Pasaporte__div RecolectorContainer">
            <p className='ProtoloLabel__title'>RECOLECTOR</p>
            <p className='ProtoloLabel'>Insitituto Colector: </p>
            <p className='ProtoloLabel'>Colector: </p>
            <p className='ProtoloLabel'>Fecha: </p>
          </div>
          <div className="Pasaporte__div ImagenAccesionContainer">
            <div className="PasaporteActions">
              <span class="material-symbols-outlined">
                qr_code
              </span>
              <span class="material-symbols-outlined">
                description
              </span>
              <span class="material-symbols-outlined">
                edit
              </span>
              <span class="material-symbols-outlined">
                delete
              </span>
            </div>
            <p className='ProtoloLabel__title'>IMAGEN</p>
            <div className="ProtoloImagenesContainer">
              <Carousel slides={slides} />
            </div>
          </div>

          <div className="Pasaporte__div SueloContainer">
            <p className='ProtoloLabel__title'>SUELO</p>
            <p className='ProtoloLabel'>Drenaje del Suelo: </p>
            <p className='ProtoloLabel'>Color del Suelo: </p>
            <p className='ProtoloLabel'>Textura del Suelo: </p>
            <p className='ProtoloLabel'>Pedregosidad: </p>
            <p className='ProtoloLabel'>Erosión del Suelo: </p>
          </div>
          <div className="Pasaporte__div ClimaContainer">
            <p className='ProtoloLabel__title'>CLIMA</p>
            <p className='ProtoloLabel'>Temperatura: </p>
            <p className='ProtoloLabel'>Humedad: </p>
            <p className='ProtoloLabel'>Luz: </p>
          </div>
          <div className="Pasaporte__div ExtraInfoContainer">
            <p className='ProtoloLabel__title'>MÁS INFORMACIÓN</p>
            <p className='ProtoloLabel'>Estado de Germoplasma: </p>
            <p className='ProtoloLabel'>Fuente de Colección: </p>
            <p className='ProtoloLabel'>Tipo de Muestra Colectada: </p>
            <p className='ProtoloLabel'>Frecuencia de Muestra: </p>
            <p className='ProtoloLabel'>¿La población está aislada de otras?: </p>
            <p className='ProtoloLabel'>¿Se ecuentan presentes cultivos cerca?: </p>
            <p className='ProtoloLabel'>Número de plantas muestradas: </p>
            <p className='ProtoloLabel'>Estado Fenológico de la Población: </p>
            <p className='ProtoloLabel'>Uso del Material: </p>
            <p className='ProtoloLabel'>Parte de la Planta utilizada: </p>
            <p className='ProtoloLabel'>¿Es ejemplar de herbario?: </p>
            <p className='ProtoloLabel'>Método de Muestreo </p>
            <p className='ProtoloLabel'>Prácticas Culturales: </p>
            <p className='ProtoloLabel'>Práctica de Asociación Especies Silvestres: </p>
            <p className='ProtoloLabel'>Plagas y Enfermedades: </p>
          </div>

          <div className="Pasaporte__div TerrenoContainer">
            <p className='ProtoloLabel__title'>TERRENO</p>
            <p className='ProtoloLabel'>Topografía: </p>
            <p className='ProtoloLabel'>Fisiografía del Terreno: </p>
            <p className='ProtoloLabel'>Vegetación a los Alrededores: </p>
            <p className='ProtoloLabel'>Forma Geográfica Microclimática: </p>
            <p className='ProtoloLabel'>Forma de la Pendiente: </p>
            <p className='ProtoloLabel'>Aspecto pendiente Orientación: </p>
          </div>
          <div className="Pasaporte__div FechasContainer">
            <p className='ProtoloLabel__title'>FECHAS</p>
            <p className='ProtoloLabel'>Fecha de Siembra: </p>
            <p className='ProtoloLabel'>Fecha de Floración: </p>
            <p className='ProtoloLabel'>Fecha de Fructificación: </p>
            <p className='ProtoloLabel'>Fecha de Cosecha: </p>
          </div>
          <div className="Pasaporte__div ObservacionContainer">
            <p className='ProtoloLabel__title'>OBSERVACIÓN</p>
            <p className='ProtoloLabel'>...</p>
          </div>
        </div>
      </div>

    </>
  );
}


export default Pasaporte;