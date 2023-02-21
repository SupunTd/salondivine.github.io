import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Hnew.css"
function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                My App
            </Link>

            <div className={`navbar-menu ${showMenu ? 'is-active' : ''}`}>
                <Link to="/" className="navbar-item" onClick={toggleMenu}>
                    Home
                </Link>
                <Link to="/about" className="navbar-item" onClick={toggleMenu}>
                    About
                </Link>
                <Link to="/contact" className="navbar-item" onClick={toggleMenu}>
                    Contact
                </Link>
            </div>

            <button className="navbar-burger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}

export default Navbar;
