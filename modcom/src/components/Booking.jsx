// src/components/Booking.js
import React, { useState } from 'react';

const Booking = () => {
    //Username
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [countyError, setCountyError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const handleUsernameChange = (e) => {
        const { value } = e.target;
        setUsername(value)
        // Perform live validation
        validateUsername(value)
    };

    const handleCountyChange = (e) => {
        const { value } = e.target;
        // Perform live validation
        validateCounty(value)
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        // Perform live validation
        validatePassword(value)
    };


    const validateUsername = (value) => {
        if (value.trim() === '') {
            setUsernameError('Username is required');
        } else if (value.length > 10) {
            setUsernameError('Username should not exceed 10 characters');
        } else {
            setUsernameError('');
        }
    };

    const validateCounty = (value) => {
        if (value.trim() === '') {
            setCountyError('County is required');
        } 
        else {
            setCountyError('');
        }
    };


    const validatePassword = (value) => {
        if (value.trim() === '') {
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
        validateUsername(username);
   
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
                        onChange={handleUsernameChange}
                    /> <br />
                    <i style={{ color: 'red' }}>{usernameError} </i><br />

                    <label>County:</label> 
                    <input
                        type="text"
                        name="county"
                        onChange={handleCountyChange}
                    /> <br />
                     <i style={{ color: 'red' }}>{countyError} </i> <br />

                    <label>Password:</label> 
                    <input
                        type="text"
                        name="password"
                        onChange={handlePasswordChange}
                    /> <br />
                     <i style={{ color: 'red' }}>{passwordError} </i>
                    

              
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Booking;
