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
            <span className="p-bold">Nutrional Values:</span> <br />
            <div className="line" />
          </p>
          <p>
            Energetic values: <br />
            <span className="p-bold">{ingr.calorie}</span>
          </p>
          <p>
            Carbonhydrate: <br />
            <span className="p-bold">{ingr.carbonhydrate}</span>
          </p>
        </div>
        <div>
          <p>
            Protein: <br />
            <span className="p-bold">{ingr.protein}</span>
          </p>
          <p>
            Lipid:
            <br />
            <span className="p-bold">{ingr.lipid}</span>
          </p>
          <p>
            Fiber:
            <br />
            <span className="p-bold">{ingr.fiber}</span>
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
