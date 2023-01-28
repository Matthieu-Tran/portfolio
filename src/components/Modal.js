import React from 'react'
import ReactDom from 'react-dom'
import '../styles/Modal.css'
import { motion } from "framer-motion";




const MODAL_STYLES = {
  position: 'fixed',
  top: '44%',
  left: '44.5%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '5px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .4)',
  zIndex: 1000
}

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
    {console.log(project.images)}
        {/* <div style={OVERLAY_STYLES} onClick={onClose} />
        <div className='modal'>
            <motion.div
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={MODAL_STYLES}>

                <div className='modal-content'>
                    <h3>{project.title}</h3>
                </div>
                <button onClick={onClose}>Close</button>
            </motion.div>
        </div> */}
    </>,
    document.getElementById('portal')
  )
}
