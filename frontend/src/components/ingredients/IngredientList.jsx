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
      <h4>Category: {ingr.category}</h4>

      <h5 className="calorie">Energetic values: {ingr.calorie}</h5>
      <h5 className="carbonhydrate">Carbonhydrate: {ingr.carbonhydrate}</h5>
      <h5 className="protein">Protein: {ingr.protein}</h5>
      <h5 className="lipid">Lipid: {ingr.lipid}</h5>
      <h5 className="fiber">Fiber: {ingr.fiber}</h5>
    </div>
  );
}
IngredientList.propTypes = {
  ingr: PropTypes.string.isRequired,
};
export default IngredientList;
