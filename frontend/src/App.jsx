import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import NavbarMobile from "./components/navbarMobile/NavbarMobile";
import Footer from "./components/footer/Footer";

import "../index.css";

function App() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
