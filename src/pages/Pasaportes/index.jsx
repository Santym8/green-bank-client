import React, { useState, useEffect } from 'react';
import HeadPrivateLayout from '../../components/HeadPrivateLayout/HeadPrivateLayout';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Pasaportes.css";
import Carousel from '../../components/Carousel/Carousel';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import { useParams } from 'react-router-dom';
function Pasaporte() {
  const { accesionId } = useParams();
  const [data, setData] = useState(null);
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    const getOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const apiUrlPasaportes = `https://green-bank-api.onrender.com/api/accesiones/pasaporte/${accesionId}`;
    fetch(apiUrlPasaportes, getOptions)
      .then(response => response.json())
      .then(data => {
        data = data.data;
        setData(data); // Actualizar el estado con los datos obtenidos
        for (let index = 0; index < data.Fotos.length; index++) {
          setSlides(value=>[...value,{url: data.Fotos[index].fotoUrl,title: data.Fotos[index].fotoId}])   
        }
        console.log(data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLongitud);
        console.log(data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLatitud);
        // data.Fotos.foreach(foto =>{slides.push({url:foto.fotoUrl, title: foto.fotoId})})

      })
      .catch(error => console.error(error));
  }, [accesionId]); // Ejecutar el efecto cada vez que cambie accesionId
  if (data) {
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
            <Link title='Regresar' to={`/accesiones/detalles/accesion/${data.accesionId}`}>
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
            <p className='PasaporteTitle__nombre'>{data.NombreLocal ? data.NombreLocal.nombreLocalNombre:"-"}</p>
            <p className='PasaporteTitle__id'>{data.accesionId}</p>
          </div>
          <div className="PasaporteInfo">
            <div className="Pasaporte__div TaxonomiaContainer">
              <p className='ProtoloLabel__title'>TAXONOMÍA</p>
              <p className='ProtoloLabel'>Familia: {data.NombreLocal.Subespecie.Especie.Genero.Familium ? data.NombreLocal.Subespecie.Especie.Genero.Familium.familiaNombre:"-"} </p>
              <p className='ProtoloLabel'>Género:  {data.NombreLocal.Subespecie.Especie.Genero? data.NombreLocal.Subespecie.Especie.Genero.generoNombre: "-"} </p>
              <p className='ProtoloLabel'>Especie: {data.NombreLocal.Subespecie.Especie ? data.NombreLocal.Subespecie.Especie.especieNombre:"-"}</p>
              <p className='ProtoloLabel'>Subespecie: {data.NombreLocal.Subespecie ? data.NombreLocal.Subespecie.subespecieNombre:"-"}</p>
              <p className='ProtoloLabel'>Nombre local: {data.NombreLocal ? data.NombreLocal.nombreLocalNombre:"-"} </p>
            </div>
            <div className="Pasaporte__div UbicacionContainer">
              <p className='ProtoloLabel__title'>UBICACIÓN RECOLECCIÓN</p>
              <p className='ProtoloLabel'>Grupo Étnico: { data.UbicacionRecoleccion.ubicacionRecoleccionGrupoEtnico ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoEtnico:"-"}</p>
              <p className='ProtoloLabel'>Idioma: {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoIdioma ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoIdioma:"-"} </p>
              <p className='ProtoloLabel'>País: {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoPais ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoPais:"-"}</p>
              <p className='ProtoloLabel'>Provincia: {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoProvincia ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoProvincia:"-"} </p>
              <p className='ProtoloLabel'>Cantón: {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoCanton ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoCanton:"-"} </p>
              <p className='ProtoloLabel'>Parroquia: {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoParroquia ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoParroquia:"-"}</p>
              <p className='ProtoloLabel'>Localidad: {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLocalidad ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLocalidad:"-"}</p>
              <p className='ProtoloLabel'>Nombre del Predio: {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoNombrePredio ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoNombrePredio:"-"}</p>
              <p className='ProtoloLabel'>Propietario: {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoPropietario ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoPropietario:"-"} </p>
              <p className='ProtoloLabel'>Localización: {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLocalizacion ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLocalizacion:"-"}</p>
              <p className='ProtoloLabel'>Latitud: {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLatitud ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLatitud:"-"}</p>
              <p className='ProtoloLabel'>Longitud: {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLongitud ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLongitud:"-"} </p>
              <p className='ProtoloLabel'>Altitud: {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoAltitud ? data.UbicacionRecoleccion.ubicacionRecoleccionGrupoAltitud:"-"}</p>
            </div>
            <div className="Pasaporte__div MapsContainer">
              <div className="mapa">
              {data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLatitud && data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLongitud ? <GoogleMap
                  lat={data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLatitud}
                  lng={data.UbicacionRecoleccion.ubicacionRecoleccionGrupoLongitud}
                  onLoad={map => {
                    const bounds = new window.google.maps.LatLngBounds();
                    map.fitBounds(bounds);
                  }}
                  onUnmount={map => {
                    // do your stuff before map is unmounted
                  }}
               
                />:"UBICACIÓN NO DISPONIBLE"}
              </div>
            </div>
            <div className="Pasaporte__div RecolectorContainer">
              <p className='ProtoloLabel__title'>RECOLECTOR</p>
              <p className='ProtoloLabel'>Instituto Colector: {data.Recoleccion.InstitutosColector ? data.Recoleccion.InstitutosColector.institutoColectorNombre:"-"} </p>
              <p className='ProtoloLabel'>Colector: {data.Recoleccion.recoleccionNombre ? data.Recoleccion.recoleccionNombre:"-"} {data.Recoleccion.recoleccionApellidos ? data.Recoleccion.recoleccionApellidos:"-"}</p>
              <p className='ProtoloLabel'>Fecha Recolección: {data.Recoleccion.recoleccionFecha ? data.Recoleccion.recoleccionFecha:"-"} </p>
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
                {slides.length>0?<Carousel slides={slides} />:"SIN FOTO"}
              </div>
            </div>

            <div className="Pasaporte__div SueloContainer">
              <p className='ProtoloLabel__title'>SUELO</p>
              <p className='ProtoloLabel'>Drenaje del Suelo: {data.Suelo.DrenajeSuelo ? data.Suelo.DrenajeSuelo.drenajeSueloNombre:"-"} </p>
              <p className='ProtoloLabel'>Color del Suelo: {data.Suelo.ColorSuelo ? data.Suelo.ColorSuelo.colorSueloNombre:"-"}</p>
              <p className='ProtoloLabel'>Textura del Suelo: {data.Suelo.TexturaSuelo ? data.Suelo.TexturaSuelo.texturaSueloNombre : data.Suelo ? data.Suelo.sueloDetalleTextura:"-"}</p>
              <p className='ProtoloLabel'>Pedregosidad: {data.Suelo.Pedregosidad ? data.Suelo.Pedregosidad.pedregosidadNombre : data.Suelo ? data.Suelo.sueloDetallePedregosidad:"-"}</p>
              <p className='ProtoloLabel'>Erosión del Suelo: {data.Suelo.ErosionSuelo ? data.Suelo.ErosionSuelo.erosionSueloNombre:"-"}</p>
            </div>
            <div className="Pasaporte__div ClimaContainer">
              <p className='ProtoloLabel__title'>CLIMA</p>
              <p className='ProtoloLabel'>Temperatura: {data.Clima.climaTemperatura ? data.Clima.climaTemperatura:"-"}</p>
              <p className='ProtoloLabel'>Humedad: {data.Clima.climaHumedad ? data.Clima.climaHumedad:"-"}</p>
              <p className='ProtoloLabel'>Luz: {data.Clima.Luz ? data.Clima.Luz.luzNombre:"-"}</p>
            </div>
            <div className="Pasaporte__div ExtraInfoContainer">
              <p className='ProtoloLabel__title'>MÁS INFORMACIÓN</p>
              <p className='ProtoloLabel'>Estado de Germoplasma: {data.Informacion.EstadoGermoplasma? data.Informacion.EstadoGermoplasma.estadoGermoplasmaNombre : data.Informacion.informacionDetallesEstado ? data.Informacion.informacionDetallesEstado:"-"} </p>
              <p className='ProtoloLabel'>Fuente de Colección: {data.Informacion.FuenteColeccion?data.Informacion.FuenteColeccion.fuenteColeccionNombre:  data.Informacion.informacionDetallesFuenteColeccion ? data.Informacion.informacionDetallesFuenteColeccion:"-"}</p>
              <p className='ProtoloLabel'>Tipo de Muestra Colectada: {data.Informacion.TipoMuestraColectada?data.Informacion.TipoMuestraColectada.tipoMuestraColectadaNombre :  data.Informacion.informacionDetallesTipoMuestraColectada ? data.Informacion.informacionDetallesTipoMuestraColectada:"-"} </p>
              <p className='ProtoloLabel'>Frecuencia de Muestra: { data.Informacion.FrecuenciaMuestra ? data.Informacion.FrecuenciaMuestra.frecuenciaMuestraNombre:"-"} </p>
              <p className='ProtoloLabel'>¿La población está aislada de otras?: {data.Informacion.informacionPoblacionAislada ? "si":"no"}</p>
              <p className='ProtoloLabel'>¿Se ecuentan presentes cultivos cerca?:{data.Informacion.informacionCultivosCerca ? "si":"no"}</p>
              <p className='ProtoloLabel'>Número de plantas muestradas: { data.Informacion.informacionPlantasMuestradas ? data.Informacion.informacionPlantasMuestradas:"-"}</p>
              <p className='ProtoloLabel'>Estado Fenológico de la Población: {data.Informacion.EstadoFenologicoPoblacion ? data.Informacion.EstadoFenologicoPoblacion.estadoFenologicoPoblacion : data.Informacion.EstadoFenologicoPoblacion.estadoFenologicoPoblacion ? data.Informacion.EstadoFenologicoPoblacion.estadoFenologicoPoblacion:"-"} </p>
              <p className='ProtoloLabel'>Uso del Material: {data.Informacion.UsoMaterial ? data.Informacion.UsoMaterial.usoMaterialNombre:"-"} </p>
              <p className='ProtoloLabel'>Parte de la Planta utilizada: {data.Informacion.PartePlantaUtilizada ? data.Informacion.PartePlantaUtilizada.partePlantaUtilizadaNombre:"-"}</p>
              <p className='ProtoloLabel'>¿Es ejemplar de herbario?: {data.Informacion.informacionEjemplarHerbario ? "si" :"no"}</p>
              <p className='ProtoloLabel'>Método de Muestreo { data.Informacion.MetodoMuestreo ? data.Informacion.MetodoMuestreo.metodoMuestreoNombre:"-"}</p>
              <p className='ProtoloLabel'>Prácticas Culturales: {data.Informacion.PracticaCultural ? data.Informacion.PracticaCultural.practicaCulturalNombre:"-"}</p>
              <p className='ProtoloLabel'>Práctica de Asociación Especies Silvestres: {data.Informacion ? data.Informacion.informacionAsociasionEspeciesSilvestres:"-"}</p>
              <p className='ProtoloLabel'>Plagas y Enfermedades: {data.Informacion ? data.Informacion.informacionPlagasEnfermedades:"-"} </p>
            </div>

            <div className="Pasaporte__div TerrenoContainer">
              <p className='ProtoloLabel__title'>TERRENO</p>
              <p className='ProtoloLabel'>Topografía: {data.Terreno.Topografium ? data.Terreno.Topografium.topografiaNombre:data.Terreno.terrenoDetallesTopografia} </p>
              <p className='ProtoloLabel'>Fisiografía del Terreno: {data.Terreno.Fisiografium ? data.Terreno.Fisiografium.fisiografiaNombre:data.Terreno.terrenoDetallesFisiografia} </p>
              <p className='ProtoloLabel'>Vegetación a los Alrededores: {data.Terreno.VegetacionAlrededor? data.Terreno.VegetacionAlrededor.vegetacionAlrededorNombre:data.Terreno.terrenoDetallesVegetacion} </p>
              <p className='ProtoloLabel'>Forma Geográfica Microclimática: {data.Terreno.FormaGeografica ? data.Terreno.FormaGeografica.formaGeograficaNombre:data.Terreno.terrenoDetallesFormaGeografica}</p>
              <p className='ProtoloLabel'>Forma de la Pendiente: {data.Terreno.FormaPendiente ? data.Terreno.FormaPendiente.formaPendienteNombre:"-"}</p>
              <p className='ProtoloLabel'>Aspecto pendiente Orientación 
                N:{ data.Terreno ? data.Terreno.terrenoAspectoPendienteNorte:"-"} 
                O:{data.Terreno ? data.Terreno.terrenoAspectoPendienteOeste:"-"}
                S:{data.Terreno ? data.Terreno.terrenoAspectoPendienteSur:"-"}
                E:{data.Terreno ? data.Terreno.terrenoAspectoPendienteEste:"-"}
              </p>
            </div>
            <div className="Pasaporte__div FechasContainer">
              <p className='ProtoloLabel__title'>FECHAS</p>
              <p className='ProtoloLabel'>Fecha de Siembra: {data.Fecha.fechaSiembra ? data.Fecha.fechaSiembra:"-"} </p>
              <p className='ProtoloLabel'>Fecha de Floración:{data.Fecha.fechaFloracion ? data.Fecha.fechaFloracion:"-"} </p>
              <p className='ProtoloLabel'>Fecha de Fructificación:{data.Fecha.fechaFructificacion ? data.Fecha.fechaFructificacion:"-"} </p>
              <p className='ProtoloLabel'>Fecha de Cosecha: {data.Fecha.fechaCosechas ? data.Fecha.fechaCosechas:"-"}</p>
            </div>
            <div className="Pasaporte__div ObservacionContainer">
              <p className='ProtoloLabel__title'>OBSERVACIÓN</p>
              <p className='ProtoloLabel'>{ data.Observacion.observacionContenido ? data.Observacion.observacionContenido:"-"}</p>
            </div>
          </div>
        </div>

      </>
    );
  }
}


export default Pasaporte;