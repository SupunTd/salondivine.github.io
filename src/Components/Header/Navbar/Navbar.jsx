import React from 'react';
import './Navbar.css';
import logon1 from './logon1.png';
const Navbar = () => {
    return (
        <>
        <nav>

            <div className="n-left">
            <a href="/">
                <div className="navilogo">
                <img src={logon1} className="logo" alt="logo" />
                </div></a>
            <span>Salon Divine</span>
            </div>
            <div className="n-right">
                <ul style={{listStyleType:"none"}}>
                    <li>
                    <a href="/Menu">Menu</a></li>
                    <li><a href="/Packages">Packages</a></li>
                    <li><a href="/About.jsx">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </div>

            <div className="n-toggle">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;