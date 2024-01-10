import { Outlet } from "react-router-dom";
import NavbarAdmin from "../../components/navbarAdmin/NavbarAdmin";
import Fav from "../../components/favorite/Fav";

function Favorite() {
  return (
    <div className="contain-favorite">
      <h2>Favorite</h2>
      <Outlet />
      <NavbarAdmin />
      <Fav />
    </div>
  );
}

export default Favorite;
