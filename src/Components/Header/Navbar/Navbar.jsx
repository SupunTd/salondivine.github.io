import React from 'react';
import './Navbar.css';
import logon1 from './logon1.png';
import {Link} from "react-router-dom";
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
                    <Link to="/Menu">Menu</Link></li>
                    <li><Link to="/Packages">Packages</Link></li>
                    <li><Link to="/About.jsx">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
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