import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='w-full'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;