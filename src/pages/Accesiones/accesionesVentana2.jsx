import React, { useState , useEffect} from 'react';
import HeadPrivateLayout from '../../components/HeadPrivateLayout/HeadPrivateLayout';
import './accesiones.css';
import './accesionesVentana2.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';
import SpeedIcon from '@mui/icons-material/Speed';
import YardIcon from '@mui/icons-material/Yard';
import { useParams } from 'react-router-dom';

function AccesionElejir() {
    const { accesionId } = useParams();
    const [data, setData] = useState(null);
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
            })
            .catch(error => console.error(error));
    }, [accesionId]); // Ejecutar el efecto cada vez que cambie accesionId
    if (data) {
        return (
            <>
                <div className='headPrivateContainer'>
                    <HeadPrivateLayout
                        title='Accesión'
                        icon='Compost'
                        user='FL'
                    />
                </div>
                <div className='AccesionesVentana2_conteiner'>
                    <Link title='Regresar' to='/accesiones/detalles'>
                        <Stack spacing={2} direction="row">
                            <Button variant="text" sx={{ color: 'black' }}>
                                <ArrowBackIcon
                                    sx={{
                                        color: 'black',
                                        marginRight: 2,
                                        fontSize: 30
                                    }}
                                />
                                <p style={{ fontSize: '1.4rem' }}>Atras</p>
                            </Button>
                        </Stack>
                    </Link>
                    <div className='accesionesVentana2__content_info'>
                        <div className='content_info_title'>
                            <p className='title_nombe_accesion'>{data.NombreLocal.nombreLocalNombre}</p>
                            <p className='title_Id_accesion'>{data.accesionId}</p>
                        </div>
                        <div className='content_info_botones'>
                            <Link to={`/accesiones/detalles/accesion/pasaporte/${data.accesionId}`}>
                                <Button sx={{
                                    backgroundColor: '#0D3F1B'
                                }} className='content_info_botones_reportes'>
                                    <Button className='content_info_botones_reporte1era'>
                                        <ArticleIcon
                                            sx={{
                                                color: 'white',
                                                fontSize: 150
                                            }}
                                        />
                                    </Button>
                                    <div className='content_info_botones_reporte_2da'>
                                        <span>Pasaporte</span>
                                    </div>
                                </Button>
                            </Link>
                            <Button sx={{
                                backgroundColor: '#0D3F1B'
                            }}
                                className='content_info_botones_reportes'>
                                <Button className='content_info_botones_reporte1era'>
                                    <SpeedIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 150
                                        }}
                                    />
                                </Button>
                                <div className='content_info_botones_reporte_2da'>
                                    <span>Estado y Protocolos</span>
                                </div>
                            </Button>
                            <Button sx={{
                                backgroundColor: '#0D3F1B'
                            }}
                                className='content_info_botones_reportes content_info_botones_reportes2'>
                                <Button className='content_info_botones_reporte1era'>
                                    <YardIcon
                                        sx={{
                                            color: 'white',
                                            fontSize: 150
                                        }}
                                    />
                                </Button>
                                <div className='content_info_botones_reporte_2da'>
                                    <span>Estado y Protocolos</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AccesionElejir;
