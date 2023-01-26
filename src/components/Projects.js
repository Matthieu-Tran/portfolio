import React from "react";
import { projects } from "../data/projects-components";
import '../styles/Projects.css'

export default function Projects() {
    return (
        <section id="projects" className="sectionClass">
          <div className="containerClass">
            <div className="flexColClass">
              <h1 className="titleClass">Apps I've Built</h1>
              <p className="descriptionClass">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                fuga dolore.
              </p>
            </div>
            <div className="flexWrapClass">
              {projects.map((project) => (
                <a href="project.link" key="project.image" className="projectClass">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="imgClass"
                      src="project.image"
                    />
                    <div className="projectInfoClass">
                      <h2 className="subtitleClass">"project.subtitle"</h2>
                      <h1 className="projectTitleClass">"project.title"</h1>
                      <p className="leading-relaxed">"project.description"</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}