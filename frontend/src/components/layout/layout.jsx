import { Outlet } from "react-router-dom";

import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import WhatsappButton from "./whatsappButton.jsx";

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

      <WhatsappButton />
    </>
  );
}

export default Layout;