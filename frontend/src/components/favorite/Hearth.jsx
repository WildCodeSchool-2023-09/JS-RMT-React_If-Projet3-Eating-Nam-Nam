import PropTypes from "prop-types";
import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import connexion from "../../services/connexion";
import "./Fav.css";

function Hearth({ recipId, isFav }) {
  const [fav, setFav] = useState(isFav);
  const postFavorites = async (id) => {
    try {
      await connexion.post("/favorites", { recipeId: id });
      setFav(true);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteFavorites = async (id) => {
    try {
      await connexion.delete(`/favorites/${id}`);
      setFav(false);
    } catch (error) {
      console.error("Error remove favorites", error);
    }
  };
  return (
    <div className="container-fav">
      <div>
        <button
          type="button"
          aria-label="add favorites"
          className="button_fav"
          onClick={() =>
            fav ? deleteFavorites(recipId) : postFavorites(recipId)
          }
          style={{
            color: fav ? "red" : "#fae7c0",
            fontWeight: fav ? "bold" : "normal",
          }}
        >
          {fav ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
      </div>
    </div>
  );
}

Hearth.propTypes = {
  recipId: PropTypes.number.isRequired,
  isFav: PropTypes.bool.isRequired,
};

export default Hearth;
