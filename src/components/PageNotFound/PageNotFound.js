import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../images/notfound.jpg'

const PageNotFound = () => {
    return (
        <div>
            <img className='w-56 h-56 mx-auto' src={pic} alt="" />
            <h3 className='my-6 text-3xl font-bold text-rose-900'>The page you are looking for doesn't exist!!</h3>
            <h3 className='my-6 text-2xl font-bold text-rose-900'>Please try the below links.</h3>
            <div className='flex gap-4 justify-center bg-slate-400 p-6'>
                <Link to='/'><span className='text-rose-600 text-xl font-semibold underline hover:text-rose-900'>Topics</span></Link>
                <Link to='/statistics'><span className='text-rose-600 text-xl font-semibold underline hover:text-rose-900'>Statistics</span></Link>
                <Link to='/blog'><span className='text-rose-600 text-xl font-semibold underline hover:text-rose-900'>Blog</span></Link>
                <Link to='/about'><span className='text-rose-600 text-xl font-semibold underline hover:text-rose-900'>About</span></Link>
            </div>
        </div>
    );
};

export default PageNotFound;