import React from "react";
import { projects } from "../data/projects-components";
import '../styles/Projects.css'

const Projects = ({isDarkMode}) =>{
    return (
      <>
        <div className={`projects ${isDarkMode ? 'projects--dark' : ''}`}>
          <div className="flexColClass">
            <h1 className="titleClass">Projects I've Built</h1>
            <p className="descriptionClass"> Here's are all the projects I've done in my career of developpement. </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card">
                <div className="image-container">
                  {/* Because we want the src attribute and not the stirng. But also we don't know the attribute of product.image, we use Object.values to get this value*/}
                  <img src={Object.values(project.image)} alt={project.title} ></img>
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
                    <button>
                      <a>
                        View More
                      </a>
                    </button>
                  </div>         
                </div>
              ))}
            </div>
          </div>
        </>
      );
}

export default Projects