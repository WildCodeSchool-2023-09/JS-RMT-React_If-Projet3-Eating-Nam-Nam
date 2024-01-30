import { React, useEffect, useState } from "react";
import connexion from "../../services/connexion";
import RecipeList from "../recipes/RecipeList";

function Favorite() {
  const [favories, setFavories] = useState([]);

  const getFavorites = async () => {
    try {
      const favoritesUser = await connexion
        .get("/favorites")
        .then((res) => res.data);
      setFavories(favoritesUser);
    } catch (error) {
      console.error("Error fetch favorites", error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

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
