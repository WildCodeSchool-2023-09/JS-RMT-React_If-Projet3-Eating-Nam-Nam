import { React, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import "./IngredientManagement.css";

function IngredientManagement() {
  const [formVisible, setFormVisible] = useState("none");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientValue, setIngredientValue] = useState({
    name: "",
    quantity: "",
    image: "",
    calorie: "",
    carbonhydrate: "",
    protein: "",
    lipid: "",
    fiber: "",
    category: "",
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

  const getIngredients = async () => {
    try {
      const myIngredients = await connexion
        .get(`/ingredients`)
        .then((res) => res.data);
      setIngredients(myIngredients);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setIngredientValue((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const putIngredient = async (event) => {
    event.preventDefault();
    try {
      connexion.put(`/ingredients/${ingredientValue.id}`, ingredientValue);
      showToastMessage();
      getIngredients();
      setFormVisible("none");
    } catch (error) {
      showToastErrorMessage();
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const loadIngredient = (ingredient) => {
    setFormVisible("grid");
    setIngredientValue(ingredient);
  };

  const deleteIngredient = async (id) => {
    try {
      connexion.delete(`/ingredients/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRequest = (event) => {
    if (ingredientValue.id) {
      putIngredient(event);
    }
  };

  return (
    <div className="table-ingredient-management">
      <div className="contain-form">
        <form
          onSubmit={handleRequest}
          className="form"
          style={{ display: formVisible }}
        >
          <label>
            Name :
            <input
              type="text"
              name="name"
              value={ingredientValue.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Quantity :
            <input
              type="text"
              name="quantity"
              value={ingredientValue.quantity}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Image :
            <input
              type="text"
              name="image"
              value={ingredientValue.image}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Calorie :
            <input
              type="text"
              name="calorie"
              value={ingredientValue.calorie}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Carbonhydrate :
            <input
              type="text"
              name="carbonhydrate"
              value={ingredientValue.carbonhydrate}
              onChange={handleChange}
              required
            />
            <label>
              Protein :
              <input
                type="text"
                name="protein"
                value={ingredientValue.protein}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Lipid :
              <input
                type="text"
                name="lipid"
                value={ingredientValue.lipid}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Fiber :
              <input
                type="text"
                name="fiber"
                value={ingredientValue.fiber}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Category :
              <input
                type="text"
                name="category"
                value={ingredientValue.category}
                onChange={handleChange}
                required
              />
            </label>
          </label>
          <div className="contain-submit">
            <button type="submit" className="button-submit">
              Modifier
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
      <table className="tab-ingredients">
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Image</th>
          <th>Calorie</th>
          <th>Category</th>
        </thead>
        <tbody>
          {ingredients.map((ingredient) => {
            return (
              <tr key={ingredient.id}>
                <td>{ingredient.id}</td>
                <td>{ingredient.name}</td>
                <td>
                  <img src={ingredient.image} alt={ingredient.name} />
                </td>
                <td>{ingredient.calorie}</td>
                <td>{ingredient.category}</td>

                <td>
                  <button
                    type="button"
                    onClick={() => deleteIngredient(ingredient.id)}
                    className="button-delete"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => loadIngredient(ingredient)}
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

export default IngredientManagement;
