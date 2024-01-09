/* eslint-disable react/prop-types */
import React from "react";
import RecipeList from "./RecipeList";

function RecipeCard({ recipes }) {
  return (
    <div>
      {recipes.map((recip) => (
        <RecipeList key={recip.id} recip={recip} />
      ))}
    </div>
  );
}

export default RecipeCard;
