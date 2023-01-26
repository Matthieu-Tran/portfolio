import './App.css';
import React , { useState }from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import {BrowserRouter as Router} from "react-router-dom";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Router>
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
      <AnimatedRoutes />
      <Footer isDarkMode={isDarkMode}/>
    </Router>
  );
}

export default App;
