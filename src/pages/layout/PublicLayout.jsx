import React from 'react';
import { Outlet } from 'react-router';
import Head from '../../components/head/Head';
import './PublicLayout.css';

function PublicLayout() {
    return (
        <div className='PublicLayout'>            
            <div className='HeaderContainer'>        
                <Head/>     
            </div>     
            <div className='ContentContainer'>                    
                <Outlet/>
            </div>       
        </div> 
    );
}

export default PublicLayout;