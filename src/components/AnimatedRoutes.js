import React from 'react'
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import {Route, Routes, useLocation} from "react-router-dom";

import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes(props) {
    const location = useLocation()
    const { isDarkMode } = props;
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<About isDarkMode={isDarkMode} />}/>
                <Route path='/Contact' element={<Contact isDarkMode={isDarkMode}/>}/>
                <Route path='/Projects' element={<Projects isDarkMode={isDarkMode}/>}/>
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes