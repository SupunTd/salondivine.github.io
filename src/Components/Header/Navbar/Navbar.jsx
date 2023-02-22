import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import React from "react";
import logon1 from './logon1.png';
function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <nav className="navbar">
            <div className="n-left">
                <Link to="/" className="navbar-logo">
                    <img src={logon1} className="logo" alt="logo" />
                </Link>
                <span>Salon Divine</span>
            </div>

            <div className={`navbar-menu ${showMenu ? 'is-active' : ''}`}>
                <Link to="/Menu" className="navbar-item" onClick={toggleMenu}>
                    Menu
                </Link>
                <Link to="/Packages" className="navbar-item" onClick={toggleMenu}>
                    Packages
                </Link>
                <Link to="/About" className="navbar-item" onClick={toggleMenu}>
                    About
                </Link>
                <Link to="/Contact" className="navbar-item" onClick={toggleMenu}>
                    Contact
                </Link>
            </div>

            <button className="navbar-burger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}

export default Navbar;
