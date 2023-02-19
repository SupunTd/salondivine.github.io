import React from 'react';
import './Logbar.css';


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
            <button>
                <a href="/Login">Log In</a>
            </button>
            <l-text2> <a href="/Signup">Sign Up</a></l-text2>
            </div>
        </log>
    );
};

export default Logbar;