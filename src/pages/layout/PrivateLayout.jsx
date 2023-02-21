import React from 'react';
import './PrivateLayout.css';
import { Outlet } from 'react-router';
import Sidebar from '../../components/Sidebar/Sidebar';

function PrivateLayout() {
    return (
        <div className="container">            
            <Sidebar />
            <div className="main"> <Outlet /> </div>
        </div>
    );
}

export default PrivateLayout;