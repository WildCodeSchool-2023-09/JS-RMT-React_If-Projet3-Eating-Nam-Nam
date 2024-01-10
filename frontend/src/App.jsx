import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import Footer from "./components/footer/Footer";

import "../index.css";
import FormIngredients from "./components/formingredients/FormIngredients";

function App() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <FormIngredients />
      <div className="App">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
