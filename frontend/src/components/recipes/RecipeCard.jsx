import PropTypes from "prop-types";
import React, { useState } from "react";
import RecipeList from "./RecipeList";
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
        <select onChange={(e) => setSectionFilter(e.target.value)}>
          <option value="all">All sections</option>
          {Array.from(sections).map((section) => (
            <option key={section} value={section}>
              {section}
            </option>
          ))}
        </select>

        <select onChange={(e) => setDifficultiesFilter(e.target.value)}>
          <option value="all">All difficulties</option>
          {Array.from(difficulties).map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>

        <select onChange={(e) => setDietsFilter(e.target.value)}>
          <option value="all">All diet</option>
          {Array.from(diets).map((diet) => (
            <option key={diet} value={diet}>
              {diet}
            </option>
          ))}
        </select>
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
