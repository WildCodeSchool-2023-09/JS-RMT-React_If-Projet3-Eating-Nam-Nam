import { Outlet, useLoaderData } from "react-router-dom";
import Hearth from "../../components/favorite/Hearth";
import Favorite from "../../components/favorite/Favorite";

function Favorites() {
  const favorites = useLoaderData();
  return (
    <div className="contain-favorite">
      <h2>Favorite</h2>
      <Outlet />
      <Hearth />
      <Favorite recipes={favorites} />
    </div>
  );
}

export default Favorites;
