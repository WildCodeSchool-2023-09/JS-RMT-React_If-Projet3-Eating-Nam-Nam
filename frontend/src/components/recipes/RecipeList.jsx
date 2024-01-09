/* eslint-disable react/prop-types */
import React from "react";

function RecipeList({ recip }) {
  return (
    <div>
      <div>
        <div>
          <img className="picture" src={recip.picture} alt={recip.title} />
        </div>
        <div>
          <h3 className="name">{recip.title}</h3>
          <p className="section">{recip.section}</p>
        </div>
        <p className="preparation_time">"{recip.preparation_time}"</p>
        <div>
          <p className="cooking_time">{recip.cooking_time}</p>
          <p className="difficulty">{recip.difficulty}</p>
        </div>
        <p className="allergen">{recip.allergen}</p>
      </div>
    </div>
  );
}

export default RecipeList;
