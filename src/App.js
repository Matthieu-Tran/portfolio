import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import { BrowserRouter as Router } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadImages = () => {
      const images = [
        '/Dior_logo.png',
        '/logoEmeria.jpeg',
        '/Valeo_Logo.svg',
        '/logoUTT.png',
        '/ntuLogo.png',
        '/IUTLogo.png',
        '/assets/Photo-Moi.jpg',
      ];
  
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = () => {
            console.error(`Failed to load image: ${src}`);
            resolve(); // Resolve even if an image fails to prevent Promise.all from rejecting
          };
        });
      });
  
      return Promise.all(imagePromises);
    };
  
    preloadImages()
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000); // Keep the spinner for at least 1 second
      })
      .catch((error) => {
        console.error("Error preloading images:", error);
      });
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
          <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
          <AnimatedRoutes isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
        </Router>
      )}
    </>
  );
}

export default App;