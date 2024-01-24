import React from "react";
import { useLoaderData } from "react-router-dom";

import RecipesCard from "../components/recipes/RecipeCard";

function Recipes() {
  const recipes = useLoaderData();
  return (
    <div>
      <div>Recipes</div>;
      <div>
        <RecipesCard recipes={recipes} />
      </div>
    </div>
  );
}

export default Recipes;
