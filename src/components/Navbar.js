import "../styles/navbar.css";
import React , { useEffect }from 'react';
import { Link } from "react-router-dom";

const Navbar = ({setIsDarkMode, isDarkMode}) => {

  // This useEffect will run when the component first mounts
  // It will check if there is a value saved in local storage for the key 'isDarkMode'
  // If there is and its value is 'true', it will call setIsDarkMode(true) to set the state to match the saved value
  useEffect(() => {
    // check if dark mode is saved in local storage
    const savedDarkMode = localStorage.getItem('isDarkMode');
    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
    }
  }, [setIsDarkMode]);

  // This useEffect will run whenever the isDarkMode state changes
  // It will save the current value of isDarkMode to the local storage
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <header className={`header ${isDarkMode ? 'header--dark' : ''}`}>
      <div className='header__logo'></div>
      <div className="header__nav_hello">Hello</div>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        {/* <Link to="/Contact">Contact</Link> */}
      </nav>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
        <span className="slider round"></span>
      </label>
    </header>
  );
}

export default Navbar;

