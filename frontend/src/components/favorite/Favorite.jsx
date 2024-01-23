import { React, useEffect, useState } from "react";

import connexion from "../../services/connexion";

import RecipeCard from "../recipes/RecipeCard";

function Favorite() {
  const [favories, setFavories] = useState([]);
  const getFavorises = async () => {
    try {
      const myFavories = await connexion.get(`/api/favorites/`);
      setFavories(myFavories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFavorises();
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

export default Favorite;
