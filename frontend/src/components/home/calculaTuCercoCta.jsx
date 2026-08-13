import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./calculaTuCercoCta.css";

function CalculadoraCerco() {
  return (
    <section className="fence-cta">
      <div className="container">
        <div className="fence-cta__content">
          <span className="fence-cta__eyebrow">
            Nueva herramienta
          </span>

          <h2>Calculá tu cerco</h2>

          <p>
            Ingresá las medidas de tu proyecto y obtené una estimación de los
            materiales necesarios.
          </p>

          <Link
            to="/calcula-tu-cerco"
            className="fence-cta__button"
          >
            Calcular mi cerco
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CalculadoraCerco;