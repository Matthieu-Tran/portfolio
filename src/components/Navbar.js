import "../styles/navbar.css";
import React , { useState }from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className={`header ${isDarkMode ? 'header--dark' : ''}`}>
      <div className="header__logo">Logo</div>
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

