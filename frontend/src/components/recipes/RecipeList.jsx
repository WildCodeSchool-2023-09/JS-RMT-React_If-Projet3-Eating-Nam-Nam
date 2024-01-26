import PropTypes from "prop-types";
import React from "react";

import Time from "../../assets/svg/Time.svg";
import Fork from "../../assets/svg/Fork.svg";
import Difficulty from "../../assets/svg/Difficulty.svg";
import Hearth from "../favorite/Hearth";

import "./Recipes.css";

function RecipeList({ recip }) {
  return (
    <article className="recipe">
      <img className="frame-image" src={recip.picture} alt={recip.title} />
      <div className="frame-title">
        <h5>{recip.title}</h5>
      </div>
      <div className="recipe-desc">
        <img src={Fork} alt="Fork" />
        <img src={Time} alt="Time" />
        <img src={Difficulty} alt="Difficulty" />
      </div>
      <div className="recipe-desc">
        <p className="section">{recip.section}</p>
        <p className="preparation_time">{recip.preparation_time}min</p>
        <p className="difficulty">{recip.difficulty}</p>
      </div>

      <Hearth className="favorite" recipId={recip.id} isFav={recip.fav} />
    </article>
  );
}
RecipeList.propTypes = {
  recip: PropTypes.string.isRequired,
};
export default RecipeList;
