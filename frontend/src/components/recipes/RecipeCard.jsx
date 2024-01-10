/* eslint-disable react/prop-types */
import React from "react";
import RecipeList from "./RecipeList";
import "./Recipes.css";

function RecipeCard({ recipes }) {
  return (
    <div className="container">
      {recipes.map((recip) => (
        <RecipeList key={recip.id} recip={recip} />
      ))}
    </div>
  );
}

export default RecipeCard;
