import PropTypes from "prop-types";
import { useRecipeContext } from "react";

import "./Fav.css";

function Fav({ recipId }) {
  const { favorites, manageFavorites } = useRecipeContext();

  return (
    <button
      type="button"
      className="fav"
      onClick={() => manageFavorites(recipId)}
    >
      {favorites.includes(recipId)}
    </button>
  );
}
Fav.propTypes = {
  recipId: PropTypes.string.isRequired,
};
export default Fav;
