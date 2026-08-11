import { Outlet } from "react-router-dom";

import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* Botón de WhatsApp va acá */}
    </>
  );
}

export default Layout;