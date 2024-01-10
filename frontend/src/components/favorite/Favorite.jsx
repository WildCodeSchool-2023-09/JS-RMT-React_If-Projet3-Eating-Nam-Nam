import { Outlet } from "react-router-dom";
import Fav from "./Fav";

function Favorite() {
  return (
    <div className="contain-favorite">
      <h2>Favorite</h2>
      <Outlet />
      <Fav />
    </div>
  );
}

export default Favorite;
