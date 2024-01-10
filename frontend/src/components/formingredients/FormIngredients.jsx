import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import "./FormIngredients.css";
import "react-toastify/dist/ReactToastify.css";

function FormIngredients() {
  const initialFormState = {
    name: "",
    quantity: "",
    image: "",
    calorie: "",
    carbonhydrate: "",
    protein: "",
    lipid: "",
    fiber: "",
    category: "",
  };

  const [formData, setFormData] = useState(initialFormState);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await connexion.post(`/ingredients`, formData);
      if (response.status === 201) {
        showToastMessage();
      } else {
        throw new Error("Data was not saved !");
      }
    } catch (error) {
      showToastErrorMessage(error);
    }
  };

  return (
    <div className="contain-form-ingredient">
      <h1>Add an ingredient - Quantities given for 100g</h1>
      <form className="form-ingredients" onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label htmlFor={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
              <input
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleInputChange}
              />
            </label>
          </div>
        ))}

        <button type="submit">ADD INGREDIENT</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default FormIngredients;
