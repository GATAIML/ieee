import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/IEEE - LOGO.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
        setDarkMode(savedDarkMode);
        document.body.classList.toggle('dark-mode', savedDarkMode);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        setDarkMode(prevDarkMode => {
            const newDarkMode = !prevDarkMode;
            document.body.classList.toggle('dark-mode', newDarkMode);
            localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
            return newDarkMode;
        });
    };

    return (
        <nav className="navbar">
            <div className="brand">
                <img src={Logo} alt="Brand Logo" className="logo" />
            </div>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <li className="navbar-item">
                        <Link to="/" onClick={() => setIsOpen(false)}><i className="bx bx-home"></i>Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/upcoming-events" onClick={() => setIsOpen(false)}><i class='bx bx-calendar-event'></i>Upcoming Events</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/recent-events" onClick={() => setIsOpen(false)}><i class='bx bxs-calendar'></i>Recent Events</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/members" onClick={() => setIsOpen(false)}><i class='bx bxs-user-account'></i>Members</Link>
                    </li>
                </ul>
                <div className="theme-toggle" onClick={toggleTheme}>
                    <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`}></i>
                </div>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i>
            </div>
        </nav>
    );
};

export default Navbar;
