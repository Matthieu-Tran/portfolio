import "../styles/navbar.css";
import React , { useState }from 'react';
const logo = require('../assets/logo.png');

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className={`header ${isDarkMode ? 'header--dark' : ''}`}>
      <img src={logo} alt="Logo" className="header__logo" />
      <nav className="header__nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
        <span className="slider round"></span>
      </label>
    </header>
  );
}

export default Navbar;

