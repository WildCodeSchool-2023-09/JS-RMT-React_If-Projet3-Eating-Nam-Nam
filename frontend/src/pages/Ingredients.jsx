import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import IngredientCard from "../components/ingredients/IngredientCard";

function Ingredients() {
  const ingredients = useLoaderData();
  return (
    <div>
      <h1>Ingredients</h1>
      <Link to="/addingredients" className="p-link">
        <p className="p-login-add">+ Add an ingredient</p>
      </Link>

      <IngredientCard ingredients={ingredients} />
    </div>
  );
}

export default Ingredients;
