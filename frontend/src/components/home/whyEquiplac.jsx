import { Link } from "react-router-dom";

import "./whyEquiplac.css";

function WhyEquiplac() {
  return (
    <section className="why-equiplac">
      <div className="container why-equiplac__container">
        <div className="why-equiplac__content">
          <span className="why-equiplac__eyebrow">Por qué Equiplac</span>

          <h2 className="why-equiplac__title">
            Más de 10 años convirtiendo ideas en proyectos reales.
          </h2>

          <p className="why-equiplac__description">
            Acompañamos a nuestros clientes desde la planificación hasta la
            ejecución, desarrollando soluciones de construcción, cercos,
            carpintería metálica, pérgolas y trabajos a medida.
          </p>

          <div className="why-equiplac__stats">
            <div className="why-equiplac__stat">
              <strong>10+</strong>
              <span>Años de experiencia</span>
            </div>

            <div className="why-equiplac__stat">
              <strong>A medida</strong>
              <span>Soluciones para cada proyecto</span>
            </div>

            <div className="why-equiplac__stat">
              <strong>Integral</strong>
              <span>De la idea a la ejecución</span>
            </div>
          </div>

          <Link to="/nosotros" className="why-equiplac__link">
            Conocé más sobre Equiplac
            <span>→</span>
          </Link>
        </div>

        <div className="why-equiplac__visual">
          <div className="why-equiplac__image why-equiplac__image--main">
            <span>Imagen de obra próximamente</span>
          </div>

          <div className="why-equiplac__image why-equiplac__image--secondary">
            <span>Imagen del equipo próximamente</span>
          </div>

          <div className="why-equiplac__badge">
            <strong>10+</strong>
            <span>años construyendo confianza</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyEquiplac;