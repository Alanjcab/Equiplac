import { useState } from "react";
import {
  ArrowRight,
  Ruler,
  PanelsTopLeft,
  CornerDownRight,
} from "lucide-react";

import "./calculadoraCerco.css";

function CalculadoraCerco() {
  const [metrosLineales, setMetrosLineales] = useState("");
  const [altura, setAltura] = useState("");
  const [anchoPanel, setAnchoPanel] = useState(2.5);
  const [esquinas, setEsquinas] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      metrosLineales,
      altura,
      anchoPanel,
      esquinas,
    });
  };

  return (
    <section className="calculadora-cerco">
      <div className="container">
        <div className="calculadora-cerco__panel">
          <div className="calculadora-cerco__header">
            <span>Calculadora de materiales</span>

            <h2>Configurá tu cerco</h2>

            <p>
              Ingresá las medidas de tu proyecto y seleccioná las
              características del panel.
            </p>
          </div>

          <form
            className="calculadora-cerco__form"
            onSubmit={handleSubmit}
          >
            <div className="calculadora-cerco__fields">
              <div className="calculadora-cerco__field">
                <label htmlFor="metrosLineales">
                  Metros lineales
                </label>

                <div className="calculadora-cerco__input">
                  <Ruler size={21} strokeWidth={2.2} />

                  <input
                    id="metrosLineales"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Ej: 50"
                    value={metrosLineales}
                    onChange={(event) =>
                      setMetrosLineales(event.target.value)
                    }
                  />

                  <span>m</span>
                </div>
              </div>

              <div className="calculadora-cerco__field">
                <label htmlFor="altura">
                  Altura del cerco
                </label>

                <div className="calculadora-cerco__input">
                  <PanelsTopLeft size={21} strokeWidth={2.2} />

                  <select
                    id="altura"
                    value={altura}
                    onChange={(event) =>
                      setAltura(event.target.value)
                    }
                  >
                    <option value="">
                      Seleccioná una altura
                    </option>

                    <option value="0.98">0,98 m</option>
                    <option value="1.31">1,31 m</option>
                    <option value="1.50">1,50 m</option>
                    <option value="1.80">1,80 m</option>
                    <option value="2.08">2,08 m</option>
                    <option value="2.40">2,40 m</option>
                  </select>
                </div>
              </div>

              <div className="calculadora-cerco__field calculadora-cerco__field--full">
                <label>
                  Ancho del panel
                </label>

                <div className="calculadora-cerco__options">
                  <button
                    type="button"
                    className={
                      anchoPanel === 2.5
                        ? "calculadora-cerco__option calculadora-cerco__option--active"
                        : "calculadora-cerco__option"
                    }
                    onClick={() => setAnchoPanel(2.5)}
                  >
                    <strong>2,50 m</strong>
                    <span>Panel</span>
                  </button>

                  <button
                    type="button"
                    className={
                      anchoPanel === 3
                        ? "calculadora-cerco__option calculadora-cerco__option--active"
                        : "calculadora-cerco__option"
                    }
                    onClick={() => setAnchoPanel(3)}
                  >
                    <strong>3,00 m</strong>
                    <span>Panel</span>
                  </button>
                </div>
              </div>

              <div className="calculadora-cerco__field">
                <label htmlFor="esquinas">
                  Cantidad de esquinas
                </label>

                <div className="calculadora-cerco__input">
                  <CornerDownRight size={21} strokeWidth={2.2} />

                  <input
                    id="esquinas"
                    type="number"
                    min="0"
                    step="1"
                    value={esquinas}
                    onChange={(event) =>
                      setEsquinas(event.target.value)
                    }
                  />
                </div>

                <small className="calculadora-cerco__help">
                  Cada esquina requiere un poste adicional.
                </small>
              </div>
            </div>

            <div className="calculadora-cerco__submit">
              <button type="submit">
                Calcular materiales
                <ArrowRight size={21} strokeWidth={2.5} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CalculadoraCerco;