import React from 'react';
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

function AccesionElejir() {
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
                        <p className='title_nombe_accesion'>ALOE VERA</p>
                        <p className='title_Id_accesion'>ID:ABCD1234</p>
                    </div>
                    <div className='content_info_botones'>
                        <Link to="/accesiones/detalles/accesion/pasaporte">
                            <Button className='content_info_botones_reportes'>
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
                        <Button className='content_info_botones_reportes'>
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
                        <Button className='content_info_botones_reportes'>
                            <Button className='content_info_botones_reporte1era'>
                                <YardIcon
                                    sx={{
                                        color: 'white',
                                        fontSize: 150
                                    }}
                                />
                            </Button>
                            <div className='content_info_botones_reporte_2da'>
                                <span>Historial Resiembras</span>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccesionElejir;
