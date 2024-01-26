import PropTypes from "prop-types";
import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import connexion from "../../services/connexion";
import "./Fav.css";

function Hearth({ recipId, isFav }) {
  const [fav, setFav] = useState(isFav === 1);
  const postFavorites = async (id) => {
    try {
      await connexion.post("/favorites", { recipeId: id });
      setFav(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container-fav">
      <button
        type="button"
        aria-label="add favorites"
        className="button_fav"
        onClick={() => postFavorites(recipId)}
        style={{
          color: fav ? "red" : "#fae7c0",
          fontWeight: fav ? "bold" : "normal",
        }}
      >
        {fav ? <MdFavorite /> : <MdFavoriteBorder />}
      </button>
    </div>
  );
}

Hearth.propTypes = {
  recipId: PropTypes.string.isRequired,
  isFav: PropTypes.string.isRequired,
};

export default Hearth;
