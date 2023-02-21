import React from 'react';
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from '../../images/logo.png';
import { height, maxHeight } from '@mui/system';

function Layout() {
    return (
        <Sidebar className="sidebar" backgroundColor="#003300">
            <div className="logo-container">
                <img className='logo' src={logo} alt="Logo.png" />
            </div>
            <Menu
                className='menu'
                menuItemStyles={{
                    button: {
                        color: '#FFFFFF',
                        backgroundColor: '#003300',
                        '&:hover': {
                            backgroundColor: '#0D3C0E',
                        },
                    },
                }}
            >
                <SubMenu
                    icon={<span class="material-symbols-outlined">psychiatry</span>}
                    label="Accesiones">

                    <MenuItem
                        component={<Link to="/accesiones/detalles" />}
                        icon={<span class="material-symbols-outlined">article</span>}>
                        Detalles
                    </MenuItem>

                    <MenuItem
                        icon={<span class="material-symbols-outlined">potted_plant</span>}
                        component={<Link to="/accesiones/resembramiento" />}>
                        Resembrar
                    </MenuItem>

                    <MenuItem
                        component={<Link to="/accesiones/validacion" />}
                        icon={< span class="material-symbols-outlined">approval_delegation</span>}>
                        Validaci&#243;n
                    </MenuItem>
                </SubMenu>


                <MenuItem
                    component={<Link to="/usuarios" />}
                    icon={< span class="material-symbols-outlined">settings_account_box</span>}>
                    Usuarios
                </MenuItem>


                <SubMenu
                    label="Reportes"
                    icon={< span class="material-symbols-outlined">content_paste</span>}>

                    <MenuItem
                        component={<Link to="/reportes/accesiones" />}
                        icon={<span class="material-symbols-outlined">psychiatry</span>}>
                        Reportes Accesiones
                    </MenuItem>

                    <MenuItem
                        component={<Link to="/reportes/usuarios" />}
                        icon={< span class="material-symbols-outlined">assignment_ind</span>}>
                        Reportes Usuarios
                    </MenuItem>

                    <MenuItem
                        component={<Link to="/reportes/taxonomia" />}
                        icon={< span class="material-symbols-outlined">yard</span>}>
                        Reportes Taxonom&#237;a
                    </MenuItem>
                </SubMenu>


                <SubMenu
                    label="Taxonom&#237;a"
                    icon={<span class="material-symbols-outlined">yard</span>}>

                    <MenuItem
                        component={<Link to="/taxonomia/familias" />}
                        icon={<span class="material-symbols-outlined">Landscape</span>}>
                        Familias
                    </MenuItem>

                    <MenuItem
                        component={<Link to="/taxonomia/generos" />}
                        icon={<span class="material-symbols-outlined">forest</span>}>
                        G&#233;eneros
                    </MenuItem>

                    <MenuItem
                        component={<Link to="/taxonomia/especies" />}
                        icon={<span class="material-symbols-outlined">park</span>}>
                        Especies
                    </MenuItem>

                    <MenuItem
                        component={<Link to="/taxonomia/subespecies" />}
                        icon={<span class="material-symbols-outlined">grass</span>}>
                        Subespecies
                    </MenuItem>

                    <MenuItem
                        component={<Link to="/taxonomia/nombres-locales" />}
                        icon={<span class="material-symbols-outlined">potted_plant</span>}>
                        Nombres Locales
                    </MenuItem>
                </SubMenu>
                <div className="grid-ayuda-social">

                    <div className='social-container'>
                    </div>
                </div>
            </Menu>
            <div className="grid-ayuda-social">
                <div >
                    <Link className='ayuda_link' to='/ayuda'>
                        <span class="material-symbols-outlined">help</span>
                        Ayuda
                    </Link>
                </div>
                <div className="social-icon">
                    <a href='https://www.facebook.com/' target="_blank">
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                    </a>
                </div>
                <div className="social-icon">
                    <a href='https://twitter.com/' target="_blank">
                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://mail.google.com/" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faGoogle} />
                    </a>
                </div>
            </div>
        </Sidebar>

    );
}

export default Layout;