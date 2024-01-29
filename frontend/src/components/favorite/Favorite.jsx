import PropTypes from "prop-types";
import { React, useEffect, useState } from "react";
import connexion from "../../services/connexion";
import RecipeCard from "../recipes/RecipeCard";

function Favorite({ recipeId }) {
  const [favories, setFavories] = useState([]);
  const getFavorites = async () => {
    try {
      await connexion.get("favorites", { recipeId });
      setFavories(true); // ou (reponse.data);  true ou repose.data qui est le tableau des recipes?
    } catch (error) {
      console.error("Error fetch favorites", error);
    }
  };
  // const postFavorites = async () => {
  //   try {
  //     await connexion.post("/favorites", { recipeId });
  //     setFavories(true);
  //   } catch (err) {
  //     console.error("Error add favorites", err);
  //   }
  // };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="contain-favorite">
      <h2>My Favorites</h2>
      <div className="favori">
        {favories.map((favori) => (
          <RecipeCard key={favori.id} favori={favori} />
        ))}
      </div>
    </div>
  );
}
Favorite.propTypes = {
  recipeId: PropTypes.string.isRequired,
};
export default Favorite;
