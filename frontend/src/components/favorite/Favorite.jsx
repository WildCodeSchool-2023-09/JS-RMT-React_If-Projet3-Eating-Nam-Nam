import { React, useEffect, useState } from "react";

import axios from "axios";

import RecipeCard from "../recipes/RecipeCard";

function Favorite() {
  const [favories, setFavories] = useState([]);
  const getFavorises = async () => {
    try {
      const myFavories = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/favories`)
        .then((res) => res.data);
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
