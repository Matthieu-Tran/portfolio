import './App.css';
import React , { useState, useEffect }from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import {BrowserRouter as Router} from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <ClimbingBoxLoader
            color={"#3155CE"}
            loading={loading}
            size={30}
          />
        </div>  
      ) : (
        <Router>
          <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
          <AnimatedRoutes isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode}/>
        </Router>
      )}
    </>
  );
}

export default App;
