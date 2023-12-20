import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import NavbarModal from "./components/NavbarModal/NavbarModal";

import "../index.css";

function App() {
  return (
    <>
      <Navbar />
      <NavbarModal />
      <Outlet />
    </>
  );
}

export default App;
