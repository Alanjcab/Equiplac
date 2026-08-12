import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/layout.jsx";

import Home from "../pages/home.jsx";
import Cercos from "../pages/cercos.jsx";
import ConstruccionEnSeco from "../pages/construccionEnSeco.jsx";
import CarpinteriaMetalica from "../pages/carpinteriaMetalica.jsx";
import Galeria from "../pages/galeria.jsx";
import Nosotros from "../pages/nosotros.jsx";
import Contacto from "../pages/contacto.jsx";
import CalculaTuCerco from "../pages/calculaTuCerco.jsx";
import NotFound from "../pages/notFound.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cercos" element={<Cercos />} />

          <Route
            path="/construccion-en-seco"
            element={<ConstruccionEnSeco />}
          />

          <Route
            path="/carpinteria-metalica"
            element={<CarpinteriaMetalica />}
          />

          <Route path="/galeria" element={<Galeria />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/calcula-tu-cerco" element={<CalculaTuCerco />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;