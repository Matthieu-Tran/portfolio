import "../styles/navbar.css";
import React , { useState }from 'react';
import { Link } from "react-router-dom";
const logo = require('../assets/logo.png');

const Navbar = ({setIsDarkMode, isDarkMode}) => {
  
  return (
    <header className={`header ${isDarkMode ? 'header--dark' : ''}`}>
      <img src={logo} alt="Logo" className="header__logo" />
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
        <span className="slider round"></span>
      </label>
    </header>
  );
}

export default Navbar;

