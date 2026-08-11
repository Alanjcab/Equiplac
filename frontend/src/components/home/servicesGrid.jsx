import { Link } from "react-router-dom";

import services from "../../constants/services.js";

import "./servicesGrid.css";

function ServicesGrid() {
  return (
    <section className="services-grid-section" id="servicios">
      <div className="container">
        <div className="services-grid-section__header">
          <h2 className="section-title">
            Nuestros servicios
          </h2>

          <p className="section-subtitle">
            Soluciones pensadas para acompañar cada proyecto desde la idea
            hasta su ejecución.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link
              to={service.path}
              className="service-grid-card"
              key={service.id}
            >
              <div className="service-grid-card__background">
                <span>Imagen próximamente</span>
              </div>

              <div className="service-grid-card__overlay"></div>

              <div className="service-grid-card__content">
                <span className="service-grid-card__line"></span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="service-grid-card__action">
                  Conocer servicio
                  <span className="service-grid-card__arrow">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;