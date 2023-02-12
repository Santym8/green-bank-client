import React from 'react';
import { Outlet } from 'react-router';

function PublicLayout() {
    return (
        <>
            <h1>Barra</h1>
            <Outlet />
        </>
    );
}

export default PublicLayout;