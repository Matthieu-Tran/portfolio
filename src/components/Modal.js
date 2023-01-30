import React, {useRef, useEffect, useState }from 'react'
import ReactDom from 'react-dom'
import '../styles/Modal.css'
import { motion } from "framer-motion";
import {FaGithub} from "react-icons/fa";
const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
};
export default function Modal({ open, project, onClose , isDarkMode}) {
  const[width, setWidth] = useState(0);
  const carousel = useRef(null)

  useEffect(() => {
    if (open) {
      if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }
    }
  }, [open])

  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div onClick={onClose} className="overlay"></div> 
      <div className="modal-container">
        <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`modal-card ${isDarkMode ? 'modal-card--dark' : ''}`}
            >
              <button onClick={onClose} className={`close-btn ${isDarkMode ? 'close-btn--dark' : ''}`}>Close</button> 
              <h3 className='title-project'>{project.title}</h3>          
              <motion.div ref={carousel}className='carousel'>
                <motion.div  
                  drag="x" 
                  dragConstraints={{right: 0, left: -width}} 
                  className='inner-carousel'>
                  {project.images.map((image, index) => (
                    <motion.div key={index} className='item'>
                      <img src={image} key={index} alt={project.image} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <div className='modal-content'>
                <div className='project-info'>
                  <div className='project-date'>
                      Date: {project.date}
                  </div>
                  <div className='project-language'>
                      Language(s) used: {project.languages}
                  </div>
                </div>
                <div className='project-description'>
                {project.moreInfo} 
                </div>
              </div>
            <div className="github-icon">     
              <a href={project.link}>
                <FaGithub size="2.5em" className="github-icon"/> 
                See code
              </a>    
            </div>  
          </motion.div>
        </div>
    </>,
    document.getElementById('portal')
  )
}
