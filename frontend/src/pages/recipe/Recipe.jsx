import React from "react";

import Time from "../../assets/svg/Time.svg";
import Fork from "../../assets/svg/Fork.svg";
import Person from "../../assets/svg/Person.svg";

import "./Recipe.css";

function Recipe() {
  return (
    <div className="recipe-page">
      <div className="recipe-frame-name">
        <div className="recipe-title">
          <img
            className="recipe-pic"
            src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe-500x500.jpg"
            alt=""
          />
          <h2 className="recipe-h2">Recipe Name</h2>
        </div>
        <div className="recipe-type">
          <img src={Fork} alt="Fork" />
          <h3>Type of plate</h3>
        </div>
        <div className="recipe-portion">
          <img src={Person} alt="Person" />
          <h3>Portion</h3>
        </div>
        <div className="recipe-time">
          <img src={Time} alt="Time" />
          <h3>Time</h3>
        </div>
        <div className="recipe-user">
          <p className="recipe-created">Created by</p>
          <h3>User name</h3>
        </div>
      </div>
      <div className="recipe-page-sub">
        <div className="recipe-frame-ingredients">
          <div className="recipe-title">
            <h2 className="recipe-h2">Ingredients</h2>
            <p>Place ingredients here</p>
          </div>
        </div>

        <div className="recipe-frame-recipe">
          <div className="recipe-title">
            <h2 className="recipe-h2">Recipe</h2>
            <p>Place recipe steps here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
