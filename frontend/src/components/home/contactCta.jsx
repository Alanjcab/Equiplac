import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import "./contactCta.css";

function ContactCta() {
  return (
    <section className="contact-cta">
      <div className="container contact-cta__container">
        <div className="contact-cta__content">
          <span className="contact-cta__eyebrow">Hablemos de tu proyecto</span>

          <h2>¿Tenés una idea en mente?</h2>

          <p>
            Contanos qué necesitás y te ayudamos a encontrar una solución
            pensada para tu proyecto.
          </p>
        </div>

        <Link to="/contacto" className="contact-cta__button">
          Contactanos
          <ArrowRight size={22} strokeWidth={2.7} />
        </Link>
      </div>
    </section>
  );
}

export default ContactCta;