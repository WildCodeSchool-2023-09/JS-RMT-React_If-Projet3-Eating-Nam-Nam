import PropTypes from "prop-types";
import React from "react";
import "./Ingredient.css";

function IngredientList({ ingr }) {
  return (
    <div className="ingredient">
      <img className="frame-image" src={ingr.image} alt={ingr.image} />
      <h1 className="frame-title">{ingr.name}</h1>
      <p className="ingr-category">
        <b>{ingr.category}</b>
      </p>
      <div className="ingr-desc">
        <div>
          <p>
            <b>Nutrional Values:</b> <br />
            <div className="line" />
          </p>
          <p>
            Energetic values: <br />
            <b>{ingr.calorie}</b>
          </p>
          <p>
            Carbonhydrate: <br />
            <b>{ingr.carbonhydrate}</b>
          </p>
        </div>
        <div>
          <p>
            Protein: <br />
            <b>{ingr.protein}</b>
          </p>
          <p>
            Lipid:
            <br />
            <b>{ingr.lipid}</b>
          </p>
          <p>
            Fiber:
            <br />
            <b>{ingr.fiber}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
IngredientList.propTypes = {
  ingr: PropTypes.string.isRequired,
};
export default IngredientList;
