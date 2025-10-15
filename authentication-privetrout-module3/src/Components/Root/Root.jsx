import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;