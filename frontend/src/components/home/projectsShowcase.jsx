import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import projects from "../../constants/projects.js";

import "./projectsShowcase.css";

function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  const changeProject = (direction) => {
    if (direction === "next") {
      setActiveProject((current) =>
        current === projects.length - 1 ? 0 : current + 1
      );
    } else {
      setActiveProject((current) =>
        current === 0 ? projects.length - 1 : current - 1
      );
    }
  };

  return (
    <section className="projects-showcase">
      <div className="container">
        <div className="projects-showcase__header">
          <span>Proyectos destacados</span>

          <h2>Trabajo real. Resultados que hablan por sí solos.</h2>
        </div>

        <div className="projects-showcase__display">
          <div className="projects-showcase__visual">
            <div
              className="projects-showcase__image"
              key={project.id}
            >
              <span>Imagen del proyecto próximamente</span>
            </div>

            <div className="projects-showcase__category">
              {project.category}
            </div>
          </div>

          <div className="projects-showcase__info">
            <div className="projects-showcase__number">
              <span>{project.number}</span>
              <span>/</span>
              <span>
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <div
              className="projects-showcase__content"
              key={project.id}
            >
              <span className="projects-showcase__line"></span>

              <p className="projects-showcase__type">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="projects-showcase__description">
                {project.description}
              </p>

              <p className="projects-showcase__location">
                {project.location}
              </p>
            </div>

            <div className="projects-showcase__bottom">
              <div className="projects-showcase__controls">
                <button
                  type="button"
                  aria-label="Proyecto anterior"
                  onClick={() => changeProject("prev")}
                >
                  <ArrowLeft size={25} strokeWidth={2.8} />
                </button>

                <button
                  type="button"
                  aria-label="Proyecto siguiente"
                  onClick={() => changeProject("next")}
                >
                  <ArrowRight size={25} strokeWidth={2.8} />
                </button>
              </div>

              <Link
                to="/galeria"
                className="projects-showcase__link"
              >
                Ver todos los trabajos
                <ArrowUpRight size={19} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>

        <div className="projects-showcase__navigation">
          {projects.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={
                index === activeProject
                  ? "projects-showcase__dot projects-showcase__dot--active"
                  : "projects-showcase__dot"
              }
              onClick={() => setActiveProject(index)}
              aria-label={`Ver proyecto ${item.number}`}
            >
              <span>{item.number}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsShowcase;