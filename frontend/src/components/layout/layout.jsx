import { Outlet } from "react-router-dom";
import Navbar from "./navbar.jsx";

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        {/* Footer va acá */}
      </footer>

      {/* Botón de WhatsApp va acá */}
    </>
  );
}

export default Layout;