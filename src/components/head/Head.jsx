import React from 'react';
import "./Head.css";
import logo from './media/FIANL3.png';
import { Link } from 'react-router-dom';

function Head() {
    return (
        <>
            <div class='todo_barra_avegacion'>
                <nav class='barra_navegacion'>
                    <div class='barra_navegacion__logo'>
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        <Link to='/'>Inicio</Link>
                        <Link to='/ayuda'>Ayuda</Link>
                        <Link to='/login'>Inciar Sesión</Link>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Head;