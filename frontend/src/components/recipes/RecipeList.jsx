/* eslint-disable react/prop-types */
import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipe }) {
  const recipes = [
    { id: 1, title: "Recipe 1" },
    { id: 2, title: "Recipe 2" },
  ];

  return (
    <div>
      <RecipeCard recipes={recipes} />;
      <div>
        <div>
          <img className="picture" src={recipe.picture} alt={recipe.name} />
        </div>
        <div>
          <h3 className="name">{recipe.name}</h3>
          <p className="section">{recipe.section}</p>
        </div>
        <p className="preparation_time">"{recipe.preparation_time}"</p>
        <div>
          <p className="cooking_time">{recipe.cooking_time}</p>
          <p className="difficulty">{recipe.difficulty}</p>
        </div>
        <p className="allergen">{recipe.allergen}</p>
      </div>
    </div>
  );
}

export default RecipeList;

// picture, section, name, preparation_time, cooking_time, difficulty, allergen
