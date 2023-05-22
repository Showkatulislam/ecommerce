import React from 'react';
import Header from '../../component/Header';
import { Outlet } from 'react-router-dom';

const Cartlayout = () => {
    return (
        <div>
             <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Cartlayout;