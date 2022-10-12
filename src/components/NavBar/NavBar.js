import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/dqlogo.png'

const NavBar = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand>
                <img
                    src={logo}
                    className="mr-0.5 mt-1 h-9 md:h-14"
                    alt=""
                />
                <span className="self-center whitespace-nowrap text-2xl md:text-3xl font-bold text-rose-600 dark:text-white">
                    Developer's Quiz
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <NavLink to='/home' className={({ isActive }) => isActive ? 'bg-zinc-300 px-4 pb-1 rounded-lg' : undefined}><span className='text-rose-600 text-xl font-semibold hover:text-rose-900'>Topics</span></NavLink>
                <NavLink to='/statistics' className={({ isActive }) => isActive ? 'bg-zinc-300 px-4 pb-1 rounded-lg' : undefined}><span className='text-rose-600 text-xl font-semibold hover:text-rose-900'>Statistics</span></NavLink>
                <NavLink to='/blog' className={({ isActive }) => isActive ? 'bg-zinc-300 px-4 pb-1 rounded-lg' : undefined}><span className='text-rose-600 text-xl font-semibold hover:text-rose-900'>Blog</span></NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'bg-zinc-300 px-4 pb-1 rounded-lg' : undefined}><span className='text-rose-600 text-xl font-semibold hover:text-rose-900'>About</span></NavLink>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default NavBar;