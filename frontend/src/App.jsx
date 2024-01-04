import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import Footer from "./components/footer/Footer";

import "../index.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="flex-container">
        <NavbarMobile />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
