import PropTypes from "prop-types";
import React from "react";
import Fav from "../favorite/Fav";
import "./Recipes.css";

function RecipeList({ recip }) {
  return (
    <div className="recipe">
      <Fav />
      <div>
        <img className="picture" src={recip.picture} alt={recip.title} />
      </div>
      <div className="title">
        <h5>{recip.title}</h5>
      </div>
      <div className="recipe-desc">
        <p className="section">{recip.section}</p>
        <p className="preparation_time">{recip.preparation_time}</p>
        <p className="cooking_time">{recip.cooking_time}</p>
        <p className="difficulty">{recip.difficulty}</p>
        <p className="allergen">{recip.allergen}</p>
      </div>
    </div>
  );
}
RecipeList.propTypes = {
  recip: PropTypes.string.isRequired,
};
export default RecipeList;
