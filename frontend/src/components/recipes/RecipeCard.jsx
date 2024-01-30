import PropTypes from "prop-types";
import React, { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeSelect from "./RecipeSelect";
import "./Recipes.css";

function RecipeCard({ recipes }) {
  const sections = new Set(recipes.map((recipe) => recipe.section));
  const difficulties = new Set(recipes.map((recipe) => recipe.difficulty));
  const diets = new Set(recipes.map((recipe) => recipe.diet));

  const [sectionFilter, setSectionFilter] = useState("all");
  const [difficultiesFilter, setDifficultiesFilter] = useState("all");
  const [dietsFilter, setDietsFilter] = useState("all");

  return (
    <div>
      <form className="section-recipe">
        <RecipeSelect
          functionFilter={setSectionFilter}
          title="All sections"
          tab={sections}
        />

        <RecipeSelect
          functionFilter={setDifficultiesFilter}
          title="All difficulties"
          tab={difficulties}
        />

        <RecipeSelect
          functionFilter={setDietsFilter}
          title="All diet"
          tab={diets}
        />
      </form>
      <div className="frame-container">
        {recipes
          .filter(
            (recipe) =>
              (recipe.section === sectionFilter || sectionFilter === "all") &&
              (recipe.difficulty === difficultiesFilter ||
                difficultiesFilter === "all") &&
              (recipe.diet === dietsFilter || dietsFilter === "all")
          )
          .map((recip) => (
            <RecipeList key={recip.id} recip={recip} />
          ))}
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  recipes: PropTypes.string.isRequired,
};
export default RecipeCard;
