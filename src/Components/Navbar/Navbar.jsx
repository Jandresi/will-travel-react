import React from 'react';
import './navbar.css';
import logo from './../../img/WillTravelLogo.png';

const Navbar = () => {
    return (
        <div>
            <div className='header-superior'>
            <li><img src={logo} alt='Will Travel' id='logo'/></li>
            <li className='social'>
                <i className='fab fa-facebook-square'></i> &nbsp;
                <i className='fab fa-twitter'></i> &nbsp;
                <i className='fab fa-instagram'></i> &nbsp;
            </li>
        </div>
        <div className='header-inferior'>
            <nav className='navbar-expand-xl navbar-expand-md navbar-expand-sm'>
                <div className='navbar-nav'>
                    <li className='nav-link'>Inicio</li>
                    <li className='nav-link'>Destinos</li>
                    <li className='nav-link'>Quiénes somos</li>
                    <li className='nav-link'>Contacte un asesor</li>
                </div>
            </nav>
        </div>
        </div>
    )
}

export default Navbar
