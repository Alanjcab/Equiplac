import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">

        {/* MARCA */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            EQUIPLAC
          </Link>

          <p className="footer__description">
            Soluciones para construir, proteger y transformar
            espacios con experiencia, compromiso y atención
            personalizada.
          </p>
        </div>

        {/* SERVICIOS */}
        <div className="footer__services">
          <h3>Servicios</h3>

          <ul>
            <li>
              <Link to="/cercos">
                Cercos
              </Link>
            </li>

            <li>
              <Link to="/construccion-en-seco">
                Construcción en seco
              </Link>
            </li>

            <li>
              <Link to="/carpinteria-metalica">
                Carpintería metálica
              </Link>
            </li>

            <li>
              <Link to="/pergolas-y-parrillas">
                Pérgolas y parrillas
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div className="footer__contact">
          <h3>Contacto</h3>

          <ul>
            <li>
              <Mail size={19} strokeWidth={2.2} />

              <a href="mailto:obras@equiplac.com.ar">
                obras@equiplac.com.ar
              </a>
            </li>

            <li>
              <Phone size={19} strokeWidth={2.2} />

              <a href="tel:+541168013555">
                (11) 6801-3555
              </a>
            </li>

            <li>
              <MapPin size={19} strokeWidth={2.2} />

              <span>
                Buenos Aires, Argentina
              </span>
            </li>
          </ul>
        </div>

        {/* REDES SOCIALES */}
        <div className="footer__social">
          <h3>Seguinos</h3>

          <div className="footer__social-links">
            {/* Acá agregaremos Instagram, Facebook y WhatsApp */}
          </div>
        </div>

      </div>

      {/* PARTE INFERIOR */}
      <div className="container footer__bottom">

        <p className="footer__copyright">
          © 2026 Equiplac. Todos los derechos reservados.
        </p>

        <p className="footer__developer">
          Desarrollado por{" "}
          <a
            href="TU_LINK_DE_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alan Cabrera
          </a>
        </p>

      </div>
    </footer>
  );
}

export default Footer;