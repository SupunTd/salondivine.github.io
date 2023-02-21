import React from 'react';
import './Logbar.css';
import {Link} from "react-router-dom";

const Logbar = () => {
    return (
        <log>
            <l-left>
                <ul style={{listStyleType:"none"}}>
                    <li>info@salondivine.com</li>
                    <li>+9477 679 0679</li>
                </ul>
            </l-left>
            <div className="Logbutton">
            <l-text1>Do you have an account?</l-text1>
            <button >
                <Link to="/Login">Log In</Link>
            </button>
            <l-text2> <Link to="/Signup">Sign Up</Link></l-text2>
            </div>
        </log>
    );
};

export default Logbar;