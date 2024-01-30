import { React, useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import connexion from "../../services/connexion";
import RecipeList from "../recipes/RecipeList";

function Favorite() {
  const [favories, setFavories] = useState([]);
  const { infosUser } = useContext(AuthContext);

  const getFavorites = async () => {
    try {
      const favoritesUser = await connexion
        .get("/favorites", infosUser.auth_id)
        .then((res) => res.data);
      setFavories(favoritesUser);
    } catch (error) {
      console.error("Error fetch favorites", error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, [infosUser.auth_id]);

  return (
    <div className="contain-favorite">
      <h2>My Favorites</h2>
      <div className="favori">
        {favories.map((favori) => (
          <RecipeList key={favori.id} recip={favori} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
