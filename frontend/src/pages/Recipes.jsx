import React from "react";
import { useLoaderData, Link } from "react-router-dom";

import RecipesCard from "../components/recipes/RecipeCard";

function Recipes() {
  const recipes = useLoaderData();
  return (
    <div>
      <div>Recipes</div>;
      <div>
        <Link to="/addrecipes" className="p-link">
          <p className="p-login-add">+ Add a recipe</p>
        </Link>
        <RecipesCard recipes={recipes} />
      </div>
    </div>
  );
}

export default Recipes;
