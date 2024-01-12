import PropTypes from "prop-types";
import React from "react";

import RecipeCard from "../recipes/RecipeCard";

function Favorite({ favorites }) {
  return (
    <div className="contain-favorite">
      <h2>My Favorites</h2>
      <div className="favorit">
        {favorites.map((favorit) => (
          <RecipeCard key={favorit.id} favorit={favorit} />
        ))}
      </div>
    </div>
  );
}
Favorite.propTypes = {
  favorites: PropTypes.string.isRequired,
};
export default Favorite;
