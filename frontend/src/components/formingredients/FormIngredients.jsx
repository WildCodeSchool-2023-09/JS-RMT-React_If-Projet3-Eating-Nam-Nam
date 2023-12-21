import React, { useState } from "react";
import "./FormIngredients.css";

function FormIngredients({ onAddIngredient }) {
  const [ingredient, setIngredient] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [fibers, setFibers] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [lipids, setLipids] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "ingredient":
        setIngredient(value);
        break;
      case "calories":
        setCalories(value);
        break;
      case "protein":
        setProtein(value);
        break;
      case "fibers":
        setFibers(value);
        break;
      case "carbohydrates":
        setCarbohydrates(value);
        break;
      case "lipids":
        setLipids(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      ingredient.trim() !== "" &&
      calories !== "" &&
      protein !== "" &&
      fibers !== "" &&
      carbohydrates !== "" &&
      lipids !== ""
    ) {
      const newIngredient = {
        name: ingredient,
        calories: parseInt(calories, 10),
        protein: parseInt(protein, 10),
        fibers: parseInt(fibers, 10),
        carbohydrates: parseInt(carbohydrates, 10),
        lipids: parseInt(lipids, 10),
      };

      onAddIngredient(newIngredient);

      setIngredient("");
      setCalories("");
      setProtein("");
      setFibers("");
      setCarbohydrates("");
      setLipids("");
    }
  };

  return (
    <form className="form-ingredients" onSubmit={handleSubmit}>
      <label htmlFor="ingredient">Ingredient :</label>
      <input
        type="text"
        id="ingredient"
        name="ingredient"
        value={ingredient}
        onChange={handleInputChange}
      />

      <label htmlFor="calories">Calories :</label>
      <input
        type="number"
        id="calories"
        name="calories"
        value={calories}
        onChange={handleInputChange}
      />

      <label htmlFor="protein">Protein :</label>
      <input
        type="number"
        id="protein"
        name="protein"
        value={protein}
        onChange={handleInputChange}
      />

      <label htmlFor="fibers">Fibers :</label>
      <input
        type="number"
        id="fibers"
        name="fibers"
        value={fibers}
        onChange={handleInputChange}
      />

      <label htmlFor="carbohydrates">Carbohydrates :</label>
      <input
        type="number"
        id="carbohydrates"
        name="carbohydrates"
        value={carbohydrates}
        onChange={handleInputChange}
      />

      <label htmlFor="lipids">Lipids :</label>
      <input
        type="number"
        id="lipids"
        name="lipids"
        value={lipids}
        onChange={handleInputChange}
      />

      <button type="submit">ADD INGREDIENT</button>
    </form>
  );
}

export default FormIngredients;
