import PropTypes from "prop-types";
import React from "react";
import "./Ingredient.css";

function IngredientList({ ingr }) {
  return (
    <div className="ingredient">
      <div>
        <img className="image" src={ingr.image} alt={ingr.image} />
      </div>
      <h3 className="ingr-name">{ingr.name}</h3>

      <div className="calorie">Energetic values: {ingr.calorie}</div>
      <div className="carbonhydrate">Carbonhydrate: {ingr.carbonhydrate}</div>
      <div className="protein">Protein: {ingr.protein}</div>
      <div className="lipid">Lipid: {ingr.lipid}</div>
      <div className="fiber">Fiber: {ingr.fiber}</div>

      <h5>Category: {ingr.category}</h5>
    </div>
  );
}
IngredientList.propTypes = {
  ingr: PropTypes.string.isRequired,
};
export default IngredientList;
