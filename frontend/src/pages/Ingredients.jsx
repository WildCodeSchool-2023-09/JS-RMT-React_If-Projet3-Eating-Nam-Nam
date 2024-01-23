import React from "react";
import { useLoaderData } from "react-router-dom";
import IngredientCard from "../components/ingredients/IngredientCard";

function Ingredients() {
  const ingredients = useLoaderData();
  return (
    <div>
      <h1>Ingredients</h1>
      <div>
        <IngredientCard ingredients={ingredients} />
      </div>
    </div>
  );
}

export default Ingredients;
