import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import Footer from "./components/footer/Footer";

import "../index.css";

function App() {
  return (
    <>
      <Navbar />
      <NavbarMobile />

      <div className="App">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
