
import FormIngredients from "./components/formingredients/FormIngredients";

import { Outlet } from "react-router-dom";


import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";

import "../index.css";

function App() {
  return (

    <div className="App">
      <h1>Add an ingredient</h1>
      <h2>Quantities given for 100g</h2>
      <FormIngredients />
    </div>

    <>
      <Navbar />
      <NavbarMobile />
      <Outlet />
    </>

  );
}

export default App;
