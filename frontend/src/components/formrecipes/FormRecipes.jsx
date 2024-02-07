import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import connexion from "../../services/connexion";
import IngredientSelect from "../ingredientselect/IngredientSelect";

import "./FormRecipes.css";

import "react-toastify/dist/ReactToastify.css";

function FormRecipes() {
  const [formData, setFormData] = useState({
    name: "",
    picture: "",
    cooktime: "",
    difficulty: "",
    regime_id: null,
    ingredients: [{ ingredients_id: null, quantity: null }],
  });

  const [regimes, setRegimes] = useState();

  const showToastMessage = () => {
    toast.success("The data has been saved successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastErrorMessage = () => {
    toast.error("Data was not saved !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const manageIngredients = (type, index, key, value) => {
    const newIngredients = [...formData.ingredients];
    if (type === "minus") {
      newIngredients.pop();
    } else if (type === "add") {
      newIngredients.push({
        ingredients_id: null,
        quantity: null,
      });
    } else if (type === "state") {
      newIngredients[index] = {
        ...newIngredients[index],
        [key]: value,
      };
    }
    setFormData((previousState) => ({
      ...previousState,
      ingredients: newIngredients,
    }));
  };

  const handleChange = (event, index, key) => {
    if (event.target.name === "ingredients") {
      manageIngredients("state", index, key, event.target.value);
    } else {
      setFormData((previousState) => ({
        ...previousState,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await connexion.post(`/recipes`, formData);
      showToastMessage();
    } catch (error) {
      showToastErrorMessage(error);
    }
  };

  const getRegimes = async () => {
    try {
      const theRegimes = await connexion
        .get("/regimes")
        .then((res) => res.data);
      setRegimes(theRegimes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRegimes();
  }, []);

  return (
    <div className="contain-form-ingredient">
      <p className="p-disclaimer">
        DISCLAIMER <br />
        Your recipe will be verified by our Chief Team before been implanted
        into our database. If your addition violate our Terms & Conditions
        rules, it will be refused and you may encountered app restrictions or
        profile banishement.
      </p>
      <form className="form-recipes" onSubmit={handleSubmit}>
        <div className="form-title">
          <h3>Add a recipe</h3>
        </div>
        <div className="form-display">
          <label>
            Name :
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Picture :
            <input
              type="text"
              name="picture"
              value={formData.picture}
              onChange={handleChange}
            />
          </label>
          <label>
            Cooking Time :
            <input
              type="text"
              name="cooktime"
              required
              value={formData.cooktime}
              onChange={handleChange}
            />
          </label>

          <div>
            <label>
              Regime :
              <select
                name="regime_id"
                value={formData.regime_id}
                onChange={handleChange}
                required
              >
                <option value={0}>Choose a regime</option>
                {regimes &&
                  regimes.map((regime) => (
                    <option key={regime.id} value={regime.id}>
                      {regime.name}
                    </option>
                  ))}
              </select>
            </label>
            <label>
              Difficulty :
              <select name="difficulty" onChange={handleChange}>
                <option value="">Choose the difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Difficult">Difficult</option>
              </select>
            </label>

            <label>
              Categorie :
              <select name="categorie" onChange={handleChange}>
                <option value="">Choose the categorie</option>
                <option value="Starter">Starter</option>
                <option value="Dish">Dish</option>
                <option value="Dessert">Dessert</option>
              </select>
            </label>
          </div>
          <div>
            {formData.ingredients.map((_, i) => (
              <IngredientSelect handleSelect={handleChange} index={i} />
            ))}
            <div>
              <button
                type="button"
                onClick={() => manageIngredients("minus")}
                disabled={formData.ingredients.length <= 1}
              >
                -
              </button>
              <button
                type="button"
                onClick={() => manageIngredients("add")}
                disabled={
                  formData.ingredients[formData.ingredients.length - 1]
                    .ingredients_id === null ||
                  formData.ingredients[formData.ingredients.length - 1]
                    .quantity === null
                }
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="form-submit">
          <button className="button-form" type="submit">
            ADD RECIPE
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default FormRecipes;
