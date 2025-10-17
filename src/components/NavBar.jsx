import '../styles/NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/Logo-_claro_.svg';

function NavBar() {
    return(
        <header>
            <img src={logo} alt="Logo" className='Logo' />
            <section>
                <nav className='NavBar'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default NavBar;
