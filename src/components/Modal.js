import React from 'react'
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
  if (!open) return null
  return ReactDom.createPortal(
    <>
        <div onClick={onClose} className="overlay">
          <motion.div
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className='modal-card'
              >
            <div className='modal-content'>
                <h3>{project.title}</h3>
                <ul>
                    {Object.keys(project).map((key) => {
                        console.log(project.images)
                        return <li key={key}>{`${key}: ${project[key]}`}</li>
                    })}
                </ul>
            </div>
            <button onClick={onClose} className="close-btn">Close</button>
          </motion.div>
        </div>
    </>,
    document.getElementById('portal')
  )
}
