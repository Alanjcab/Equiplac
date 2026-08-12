import { FaWhatsapp } from "react-icons/fa";

import "./whatsappButton.css";

function WhatsappButton() {
  const phoneNumber = "5492236219418";

  const message = "Hola queria realizar una consulta.";

  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Equiplac por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;