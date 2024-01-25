import PropTypes from "prop-types";
import React from "react";
import RecipeList from "./RecipeList";
import "./Recipes.css";

function RecipeCard({ recipes }) {
  return (
    <div className="frame-container">
      {recipes.map((recip) => (
        <RecipeList key={recip.id} recip={recip} />
      ))}
    </div>
  );
}

RecipeCard.propTypes = {
  recipes: PropTypes.string.isRequired,
};
export default RecipeCard;
