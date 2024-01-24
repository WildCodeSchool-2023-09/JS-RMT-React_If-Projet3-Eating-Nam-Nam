import React from "react";
import { useLoaderData } from "react-router-dom";
import IngredientCard from "../components/ingredients/IngredientCard";

function Ingredients() {
  const ingredients = useLoaderData();
  return (
    <div>
      <h1>Ingredients</h1>

      <IngredientCard ingredients={ingredients} />
    </div>
  );
}

export default Ingredients;
