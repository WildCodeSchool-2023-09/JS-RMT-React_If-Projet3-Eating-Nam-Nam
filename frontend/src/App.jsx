import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";

import "../index.css";
import FormIngredients from "./components/formingredients/FormIngredients";

function App() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Outlet />
      <FormIngredients />
    </>
  );
}

export default App;
