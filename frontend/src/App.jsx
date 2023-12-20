import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";

import "../index.css";

function App() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Outlet />
    </>
  );
}

export default App;
