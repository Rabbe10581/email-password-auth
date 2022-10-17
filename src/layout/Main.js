import React from 'react';
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <h1 className='text-center text-info p-4'>My email password Authentication.</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;