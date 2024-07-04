// src/components/About.js
import React from 'react';
import logo from '../images/down.jpeg'
const About = () => {
    return (
        <div>
            <h2>About</h2>
            <p>This is the About page.</p>
            <img src={logo} alt=""/>
            <p className='text-danger'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, temporibus quod odio accusantium et ad similique aperiam itaque vero mollitia omnis! Minus quasi a, fugit modi sit veritatis rem fugiat.</p>
        </div>
    );
};

export default About;
