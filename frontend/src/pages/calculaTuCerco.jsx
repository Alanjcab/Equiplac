import CalculadoraCerco from "../components/calculaTuCerco/calculadoraCerco.jsx";

import "./calculaTuCerco.css";

function CalculaTuCerco() {
  return (
    <>
      <section className="calcula-cerco-hero">
        <div className="container">
          <span>Planificá tu proyecto</span>

          <h1>Calculá tu cerco</h1>

          <p>
            Ingresá las medidas de tu proyecto y obtené una estimación
            de los materiales necesarios.
          </p>
        </div>
      </section>

      <CalculadoraCerco />
    </>
  );
}

export default CalculaTuCerco;