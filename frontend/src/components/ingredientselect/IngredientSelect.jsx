import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import connexion from "../../services/connexion";

function IngredientSelect({ handleSelect, index }) {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async () => {
    try {
      const theIngredients = await connexion
        .get("/ingredients")
        .then((res) => res.data);
      setIngredients(theIngredients);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div>
      <label className="list-regime">
        <p>Ingredients :</p>
        <select
          name="ingredients"
          value={null}
          required
          onChange={(event) => handleSelect(event, index, "ingredients_id")}
        >
          <option value={0}>Choose a ingredient</option>
          {ingredients.map((ingr) => (
            <option key={ingr.id} value={ingr.id}>
              {ingr.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        <p className="label-text">Quantity : </p>
        <input
          type="text"
          name="ingredients"
          required
          value={null}
          onChange={(event) => handleSelect(event, index, "quantity")}
        />
      </label>
    </div>
  );
}
IngredientSelect.propTypes = {
  handleSelect: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};
export default IngredientSelect;
