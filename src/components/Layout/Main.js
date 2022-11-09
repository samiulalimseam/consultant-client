import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Header/Footer/Footer';
import Header from './Shared/Header/Header';


const Main = () => {
    return (
        <div className=' '>
        <Header></Header>
            <Outlet>

            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;