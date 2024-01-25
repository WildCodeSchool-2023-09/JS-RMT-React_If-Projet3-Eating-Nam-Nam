import { React, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import "./RecipeManagement.css";

function RecipeManagement() {
  const [formVisible, setFormVisible] = useState("none");
  const [recipes, setRecipes] = useState([]);
  const [recipeValue, setRecipeValue] = useState({
    picture: "",
    section: "",
    title: "",
    preparation_time: 0,
    cooking_time: 0,
    difficulty: "",
    allergen: false,
  });

  const showToastMessage = () => {
    toast.success("Les données ont bien été modifiée !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastErrorMessage = () => {
    toast.error("Il y a eu une erreur les données n'ont pas été modifiée !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const getRecipes = async () => {
    try {
      const myRecipes = await connexion.get(`/recipes`).then((res) => res.data);
      setRecipes(myRecipes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    if (
      event.target.name === "preparation_time" ||
      event.target.name === "cooking_time"
    ) {
      setRecipeValue((previousState) => ({
        ...previousState,
        [event.target.name]: +event.target.value,
      }));
    } else {
      setRecipeValue((previousState) => ({
        ...previousState,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const putRecipe = async (event) => {
    event.preventDefault();
    try {
      connexion.put(`/recipes/${recipeValue.id}`, recipeValue);
      showToastMessage();
      getRecipes();
      setFormVisible("none");
    } catch (error) {
      showToastErrorMessage();
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const loadRecipe = (recipe) => {
    setFormVisible("grid");
    setRecipeValue(recipe);
  };

  const deleteRecipe = async (id) => {
    try {
      connexion.delete(`/recipes/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRequest = (event) => {
    if (recipeValue.id) {
      putRecipe(event);
    }
  };

  return (
    <div className="table-recipe-management">
      <div className="contain-form">
        <form
          onSubmit={handleRequest}
          className="form"
          style={{ display: formVisible }}
        >
          <label>
            Picture :
            <input
              type="text"
              name="picture"
              value={recipeValue.picture}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Section :
            <input
              type="text"
              name="section"
              value={recipeValue.section}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Title :
            <input
              type="text"
              name="title"
              value={recipeValue.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Preparation time :
            <input
              type="number"
              name="preparation_time"
              value={recipeValue.preparation_time}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Cooking time :
            <input
              type="number"
              name="cooking_time"
              value={recipeValue.cooking_time}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Difficulty :
            <input
              type="text"
              name="difficulty"
              value={recipeValue.difficulty}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Allergen :
            <input
              type="text"
              name="allergen"
              value={recipeValue.allergen}
              onChange={handleChange}
              required
            />
          </label>
          <div className="contain-submit">
            <button type="submit" className="button-submit">
              Modifier
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
      <table className="tab-recipes">
        <thead>
          <th>Id</th>
          <th>Picture</th>
          <th>Title</th>
        </thead>
        <tbody>
          {recipes.map((recipe) => {
            return (
              <tr key={recipe.id}>
                <td>{recipe.id}</td>
                <td>
                  <img src={recipe.picture} alt={recipe.title} />
                </td>
                <td>{recipe.Title}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteRecipe(recipe.id)}
                    className="button-delete"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => loadRecipe(recipe)}
                    className="button-put"
                  >
                    Put
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeManagement;
