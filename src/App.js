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

  // Function to dynamically load all images from a folder
  const importAll = (r) => r.keys().map(r);

  useEffect(() => {
    const preloadImages = () => {
      // Dynamically import all images from the specified folders
      const logoImages = importAll(require.context('./assets/logo', false, /\.(png|jpe?g|svg)$/));
      const projectImages = importAll(require.context('./assets/projects-images', true, /\.(png|jpe?g|svg)$/));
      const photoMoi = require('./assets/Photo-Moi.jpg');

      const allImages = [...logoImages, ...projectImages, photoMoi];

      // Preload all images
      const imagePromises = allImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      return Promise.all(imagePromises);
    };

    preloadImages()
      .then(() => {
        setTimeout(() => {
          setLoading(false); // Set loading to false after images are loaded
        }, 1000); // Optional delay for the spinner
      })
      .catch((error) => {
        console.error("Error preloading images:", error);
        setLoading(false); // Ensure loading is set to false even if some images fail
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <ClimbingBoxLoader color={"#3155CE"} loading={loading} size={30} />
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
