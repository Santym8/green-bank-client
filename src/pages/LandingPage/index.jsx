import React from 'react';
import "./landingpage.css";
import { Link } from 'react-router-dom';
import video2 from './media/video1_2.mp4';
import caret from './media/caret2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function LandingPage() {
    return (
        <>
            <div className='diagonal-div'>
                <div className='absolute-landigPage intruccion-content'>
                    <div className=' title-landigPage'>
                        <p >GreenBank</p>
                    </div>
                    <div className=' intro-landigPage'>
                        <p >Preservar las plantas es preservar nuestra <br />
                            propia existencia. GreenBank ayuda
                            al planeta.</p>
                    </div>
                </div>
                <div className='absolute-landigPage info-todo'>

                    <div className='title-inf-landigPage'>
                        <p >Información</p>
                    </div>
                    <div className='content-info-landigPage'>
                        <div className='content-flex-info content-frase-h1'>
                            <div className='caret-landingPage'>
                                <img width={40} src={caret} alt="" />
                            </div>
                            <div className='content-info-h1'>
                                <p >Diseñado por estudiantes de la carrera de software de la Universidad Técnica del Norte - Ecuador.</p>
                            </div>
                        </div>
                        <div className='content-flex-info content-frase-h2'>
                            <div className='caret-landingPage'>
                                <img width={40} src={caret} alt="" />
                            </div>
                            <div className='content-info-h2'>
                                <p >La aplicación web esta diseñada para la gestión de bancos de germplasma.</p>
                            </div>
                        </div>
                        <div className='content-flex-info content-frase-h3'>
                            <div className='caret-landingPage'>
                                <img width={40} src={caret} alt="" />
                            </div>
                            <div className='content-info-h3'>
                                <p >Para soporte técnico llame a los números: 0967559852 - 0994671893</p>
                            </div>
                        </div>
                    </div>
                    <div className='logos-redes-sociales-landinPpage'>
                        <div className='tamano-redes facebook'>
                            <Link to='https://twitter.com/'>
                                <FontAwesomeIcon className="facebook__icon icon-tamaño" style={{ fontSize: '3rem' }} icon={faFacebook} />
                            </Link>
                        </div>
                        <div className='tamano-redes twitter'>
                            <Link width={60} to='https://www.facebook.com/'>
                                <FontAwesomeIcon className="twitter__icon icon-tamaño" style={{ fontSize: '3rem' }} icon={faTwitter} />
                            </Link>
                        </div>
                        <div className='tamano-redes google'>
                            <Link to='http://google.com/'>
                                <FontAwesomeIcon className="gmail__icon icon-tamaño" style={{ fontSize: '3rem' }} icon={faGoogle} />
                            </Link>
                        </div>
                    </div>
                </div>
                <video className='background-video' autoPlay loop muted>
                    <source src={video2} type='video/mp4' />
                </video>
            </div>
        </>
    );
}

export default LandingPage;