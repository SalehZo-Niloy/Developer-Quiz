import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
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
                <span className="self-center whitespace-nowrap text-xl md:text-3xl font-semibold text-rose-600 dark:text-white">
                    Developer's Quiz
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link to='/'><span className='text-rose-600 text-lg hover:text-rose-900'>Topics</span></Link>
                <Link to='/'><span className='text-rose-600 text-lg hover:text-rose-900'>Statistics</span></Link>
                <Link to='/'><span className='text-rose-600 text-lg hover:text-rose-900'>Blog</span></Link>
                <Link to='/'><span className='text-rose-600 text-lg hover:text-rose-900'>About</span></Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;