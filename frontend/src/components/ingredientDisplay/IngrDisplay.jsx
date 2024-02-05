import PropTypes from "prop-types";
import React from "react";

function IngrDisplay({ ingredient }) {
  return (
    <div>
      <img
        className="ingr-image"
        src={ingredient.image}
        alt={ingredient.name}
      />
      <p className="ingr-title">
        {ingredient.name} <br />
        <span className="ingr-quantity">
          {ingredient.quantity} {ingredient.unity}
        </span>
      </p>
    </div>
  );
}

IngrDisplay.propTypes = {
  ingredient: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    unity: PropTypes.string.isRequired,
  }).isRequired,
};

export default IngrDisplay;
