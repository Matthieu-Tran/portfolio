import React, {useState } from "react";
import { projects } from "../data/projects-components";
import '../styles/Projects.css'
import { AnimatePresence, motion } from "framer-motion";
import Modal from './Modal'

const Projects = ({isDarkMode}) =>{
  const[tempData, setTempData] = useState([]) 
  const[isOpen, setIsOpen] = useState(false)
    const getData = (project) => {
      setTempData(project)
      setIsOpen(true)
    }
    return (
      <>
        <div className={`projects ${isDarkMode ? 'projects--dark' : ''}`}>
          <div className="flexColClass">
            <h1 className="titleClass">Projects I've Built</h1>
            <p className="descriptionClass"> Here's are all the projects I've done in my career of developpement. </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={Object.values(project.images)}>
                <div className="image-container">
                  {/* Because we want the src attribute and not the stirng. But also we don't know the attribute of product.image, we use Object.values to get this value*/}
                  <img src={Object.values(project.images)[0]} alt={project.title} ></img>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <h3>{project.title}</h3>
                  </div>
                  <div className="card-body">
                    <p>{project.description}</p>
                  </div>
                </div>    
                <div className="btn">
                <motion.button 
                  onClick={() => getData(project)}  
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="moreInfo-button">
                  More info
                </motion.button>
                <Modal open={isOpen} project={tempData}onClose={() => setIsOpen(false)}/>
                  </div>         
                </div>
              ))}
            </div>
          </div>
        </>
      );
}

export default Projects