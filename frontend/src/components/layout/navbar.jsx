import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__container">
        <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
          EQUIPLAC
        </NavLink>

        <button
          className={`navbar__toggle ${isMenuOpen ? "navbar__toggle--open" : ""}`}
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar__content ${isMenuOpen ? "navbar__content--open" : ""}`}>
          <ul className="navbar__menu">
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink to="/cercos" onClick={closeMenu}>
                Cercos
              </NavLink>
            </li>

            <li>
              <NavLink to="/construccion-en-seco" onClick={closeMenu}>
                Construcción en seco
              </NavLink>
            </li>

            <li>
              <NavLink to="/carpinteria-metalica" onClick={closeMenu}>
                Carpintería metálica
              </NavLink>
            </li>

            <li>
              <NavLink to="/pergolas-y-parrillas" onClick={closeMenu}>
                Pérgolas y parrillas
              </NavLink>
            </li>

            <li>
              <NavLink to="/galeria" onClick={closeMenu}>
                Galería
              </NavLink>
            </li>

            <li>
              <NavLink to="/nosotros" onClick={closeMenu}>
                Nosotros
              </NavLink>
            </li>

            <li>
              <NavLink to="/contacto" onClick={closeMenu}>
                Contacto
              </NavLink>
            </li>
          </ul>

          <NavLink
            to="/cotizador"
            className="navbar__cta"
            onClick={closeMenu}
          >
            Cotizá tu cerco
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;