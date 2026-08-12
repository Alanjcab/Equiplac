import { Link } from "react-router-dom";
import "./hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>

      <div className="container hero__container">
        <div className="hero__content">       
          <h1 className="hero__title">
            Cercos, construccion en seco y carpinteria metalica.
          </h1>      
          <div className="hero__actions">
            <a href="#servicios" className="hero__button hero__button--primary">
              Conocé nuestros servicios
            </a>

            <Link
              to="/contacto"
              className="hero__button hero__button--secondary"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;