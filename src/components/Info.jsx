import React from 'react';
import image from '../assets/profile.jpeg';

function Info() {
    return (
        <div className="info-component" id="info-component">
            <img src={image} alt="A profile image of Mark Baek" data-info="linkedin" />
            <i className="fa-solid fa-moon" id="fa-moon" data-darkmode="dark"></i>
            <i className="dark-mode-hide-icon fa-solid fa-sun" id="fa-sun" data-darkmode="light"></i>
            <div className="info-container">
                <h1>Mark Baek</h1>
                <h2 id="frontend-dev-title-text">Frontend Developer</h2>
                <p>mark.baek@developer.com</p>
                <div className="info-btn-container">
                    <button className="info-email-btn" data-info="email"><i className="fa-solid fa-envelope"></i> Email</button>
                    <button className="info-linkedin-btn" data-info="linkedin"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
                </div>
            </div>
        </div>
    )
};

export default Info;