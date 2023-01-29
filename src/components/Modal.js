import React, {useRef, useEffect, useState }from 'react'
import ReactDom from 'react-dom'
import '../styles/Modal.css'
import { motion } from "framer-motion";

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
export default function Modal({ open, project, onClose }) {
  const[width, setWidth] = useState(0);
  const carousel = useRef()

  useEffect(() =>{
    console.log(carousel)
  }, [])

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
            className='modal-card'
            >
              <h3>{project.title}</h3>           
              <motion.div ref={carousel} className='carousel'>
                <motion.div drag="x" dragConstraints={{right: 0, left: -790}} className='inner-carousel'>
                  {project.images.map((image, index) => (
                    <motion.div key={index} className='item'>
                      <img src={image} key={index} alt={`image-${index}`} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <div className='modal-content'>
                <div className='project-info'>
                  <div className='project-date'>
                      2020
                  </div>
                  <div className='project-language'>
                      Javascript
                  </div>
                </div>
                <div className='project-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet risus nullam eget felis eget nunc lobortis. Proin fermentum leo vel orci porta non. 
                </div>
              </div>
                   

            <button onClick={onClose} className="close-btn">Close</button>
            <button>Link to Git-Hub</button>  
          </motion.div>
        </div>
    </>,
    document.getElementById('portal')
  )
}
