import PropTypes from "prop-types";
import React from "react";
import IngredientList from "./IngredientList";

function IngredientCard({ ingredients }) {
  return (
    <div className="container">
      {ingredients.map((ingr) => (
        <IngredientList key={ingr.id} ingr={ingr} />
      ))}
    </div>
  );
}

IngredientCard.propTypes = {
  ingredients: PropTypes.string.isRequired,
};
export default IngredientCard;
