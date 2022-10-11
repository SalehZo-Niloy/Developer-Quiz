import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { ScrollRestoration } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ScrollRestoration />
        </div>
    );
};

export default Main;