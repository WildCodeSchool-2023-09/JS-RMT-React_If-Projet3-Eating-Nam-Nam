import { createContext, useContext, useEffect, useState } from "react";

const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export function RecipeProvider() {
  const recipeFavorites = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];

  const [favorites, setFavorites] = useState(recipeFavorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const manageFavorites = (recipeId) => {
    if (favorites.includes(recipeId)) {
      setFavorites(favorites.filter((id) => id !== recipeId));
    } else {
      setFavorites([...favorites, recipeId]);
    }
  };
  return (
    <RecipeContext.Provider>
      value={{ favorites, manageFavorites }}
    </RecipeContext.Provider>
  );
}
