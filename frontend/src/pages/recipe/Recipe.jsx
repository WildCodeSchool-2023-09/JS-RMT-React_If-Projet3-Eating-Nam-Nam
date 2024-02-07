import React from "react";
import { useLoaderData } from "react-router-dom";

import Time from "../../assets/svg/Time.svg";
import Fork from "../../assets/svg/Fork.svg";
import Person from "../../assets/svg/Person.svg";
import Flame from "../../assets/svg/Difficulty.svg";
import IngrDisplay from "../../components/ingredientDisplay/IngrDisplay";

import "./Recipe.css";

function Recipe() {
  const { recipes } = useLoaderData();

  return (
    <div className="recipe-page">
      <div className="recipe-frame-name">
        <div className="recipe-title">
          <img className="recipe-pic" src={recipes.picture} alt="" />
          <h2 className="recipe-h2">{recipes.title}</h2>
        </div>
        <div className="recipe-type">
          <div className="recipe-container">
            <img src={Fork} alt="Fork" />
            <h3>Type of plate</h3>
          </div>
          <p>{recipes.section}</p>
        </div>
        <div className="recipe-regime">
          <div className="recipe-container">
            <img src={Person} alt="Person" />
            <h3>Regime</h3>
          </div>
          <p>{recipes.diet}</p>
        </div>
        <div className="recipe-time">
          <div className="recipe-container">
            <img src={Time} alt="Time" />
            <h3>Time</h3>
          </div>
          <p>{recipes.preparation_time}min</p>
        </div>
        <div className="recipe-difficulty">
          <div className="recipe-container">
            <img src={Flame} className="flame" alt="Flame" />
            <h3>Difficulty</h3>
          </div>
          <p>{recipes.difficulty}</p>
        </div>
      </div>
      <div className="recipe-page-sub">
        <div className="recipe-frame-ingredients">
          <h2 className="recipe-h2">Ingredients</h2>
          <div className="ingr-display">
            {recipes.ingredients.map((ingredient) => (
              <IngrDisplay key={ingredient.id} ingredient={ingredient} />
            ))}
          </div>
        </div>
        <div className="recipe-frame-recipe">
          <h2 className="recipe-h2">Recipe</h2>
          <p className="recipe-p">
            <span className="step">Step 1:</span> Gather the ingredients needed
            for the dish such as meat, vegetables, and spices. Make sure you
            have everything in the correct quantities before starting. <br />
            <span className="step">Step 2:</span> Prepare and chop all the
            ingredients as required, ensuring they are the right size and shape
            for the recipe. This may include dicing onions, mincing garlic, or
            slicing vegetables. <br />
            <span className="step">Step 3: </span>Heat oil in a pan over medium
            heat and sauté the onions and garlic until they turn golden brown
            and release their aromas. This step helps to build a flavorful base
            for the dish. <br />
            <span className="step"> Step 4: </span>Add the main ingredient, such
            as chicken or beef, along with the spices and seasonings. Cook them
            until the meat is fully cooked or until desired tenderness is
            achieved. <br />
            <span className="step">Step 5:</span> Pour in the sauce or broth to
            add moisture and flavor to the dish. Let it simmer for a few minutes
            to allow the flavors to meld together and the sauce to thicken
            slightly. <br />
            <span className="step">Step 6:</span> Add any additional vegetables
            or flavor enhancers, such as herbs or soy sauce, to the dish. Cook
            until the vegetables are tender and all the ingredients are well
            combined. <br />
            <span className="step">Step 7:</span> Serve the dish hot, plating it
            nicely and garnishing as desired. Enjoy your delicious homemade
            meal!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
