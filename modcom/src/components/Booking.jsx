// src/components/Booking.js
import React, { useState } from 'react';

const Booking = () => {
    //Username
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    //Password
    const [county, setCounty] = useState('');
    const [countyError, setCountyError] = useState('');

    //Password
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');



    const  handleUsernameValidation = (e) => {
        const { value } = e.target;
        setUsername(value)

        if (value.trim() == '') {
            setUsernameError('Username is required')
        } else if (value.length > 10) {
            setUsernameError('Username should not exceed 10 characters');
        } else {
            setUsernameError('');
        }
    };


    const handleCountyValidation = (e) => {
        const { value } = e.target;
        setCounty(value)
        if (value.trim() === '') {
            setCountyError('County is required');
        } 
        else {
            setCountyError('');
        }
    };

    const handlePasswordValidation = (e) => {
        const { value } = e.target;
        setPassword(value)
        if (value.trim() == '') {
            setPasswordError('Password is required');
        } else if (value.length < 8) {
            setPasswordError('Should be more than 8 characters');
        } 
        else if (!/[a-zA-Z]/.test(value)) {
            setPasswordError('Password must contain at least one letter');
        }
        else {
            setPasswordError('');
        }
    };





    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate before submitting (optional)
        handleUsernameValidation(username)
        handleCountyValidation(county)
        handlePasswordValidation(password)
   
    };



    return (
        <div>
            <h2>Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    
                    <label>Username:</label> 
                    <input
                        type="text"
                        name="username"
                        onChange={handleUsernameValidation}
                    /> <br />
                    <i style={{ color: 'red' }}>{usernameError} </i><br />

                    <label>County:</label> 
                    <input
                        type="text"
                        name="county"
                        onChange={handleCountyValidation}
                    /> <br />
                     <i style={{ color: 'red' }}>{countyError} </i> <br />

                    <label>Password:</label> 
                    <input
                        type="text"
                        name="password"
                        onChange={handlePasswordValidation}
                    /> <br />
                     <i style={{ color: 'red' }}>{passwordError} </i>

                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Booking;
