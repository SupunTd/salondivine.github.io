import React, { useState } from 'react';
import './Signup.css';
import Logbar from "../Header/Logbar/Logbar";
import Navbar from "../Header/Navbar/Navbar";

const SignUp = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [gender, setGender] = useState('Male');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleTelephoneChange = (event) => {
        setTelephone(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleBirthdayChange = (event) => {
        setBirthday(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`First Name: ${firstName}, Last Name: ${lastName}, Telephone: ${telephone}, Gender: ${gender}, Birthday: ${birthday}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    };

    return (
<>
    <Logbar/>
    <Navbar/>

        <div className="signup-container">



            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name:</label>
                <input
                    type="text"
                    id="first-name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
                <label htmlFor="last-name">Last Name:</label>
                <input
                    type="text"
                    id="last-name"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                <label htmlFor="telephone">Telephone:</label>
                <input
                    type="tel"
                    id="telephone"
                    value={telephone}
                    onChange={handleTelephoneChange}
                />
                <label htmlFor="gender">Gender:</label>
                <select id="gender" value={gender} onChange={handleGenderChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="birthday">Birthday:</label>
                <input
                    type="date"
                    id="birthday"
                    value={birthday}
                    onChange={handleBirthdayChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
</>
    );
};

export default SignUp;
