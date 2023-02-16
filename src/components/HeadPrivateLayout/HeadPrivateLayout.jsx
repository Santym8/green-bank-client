import React from 'react';
import './HeadPrivateLayout.css';
import { Link } from 'react-router-dom';
function HeadPrivateLayout({ title , icon , user }) {
    return (
       <>
            <div className='actionTitleHead'>
                <p>{title}</p>
                <span class="material-symbols-outlined">{icon}</span>
            </div>
            <div className="profileHead">
                <div className='profileHead__div'><p>{user}</p></div>
                <Link title='Cerrar Sesión' to='/'>
                    <span class="material-symbols-outlined">logout</span>
                </Link>
            </div>
       </>
    );
}

export default HeadPrivateLayout;