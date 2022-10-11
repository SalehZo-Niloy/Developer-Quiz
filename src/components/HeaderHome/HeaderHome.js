import React from 'react';
import './HeaderHome.css'

const HeaderHome = () => {
    return (
        <div className='h-56 md:h-96 w-full banner'>
            <div className='w-full h-full dark-bg'>
                <h1 className='text-3xl md:text-7xl font-bold px-7 md:px-10 pt-10 md:pt-20 pb-5 md:pb-20 text-white hover:text-rose-600'>Welcome to Developer's Quiz</h1>
                <p className='text-white hover:text-rose-600 px-16 text-sm md:text-2xl'>Take a test to evaluate your knowledge about Web Development</p>
            </div>
        </div >
    );
};

export default HeaderHome;