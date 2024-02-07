import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import "./FormIngredients.css";
import "react-toastify/dist/ReactToastify.css";

function FormIngredients() {
  const initialFormState = {
    name: "",
    image: "",
    calorie: "",
    carbonhydrate: "",
    protein: "",
    lipid: "",
    fiber: "",
    category: "",
    allergen: "",
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
      await connexion.post(`/ingredients`, formData);
      showToastMessage();
    } catch (error) {
      showToastErrorMessage(error);
    }
  };

  return (
    <div className="contain-form-ingredient">
      <p className="p-disclaimer">
        DISCLAIMER <br />
        Your ingredient will be verified by our Chief Team before been implanted
        into our database. If your addition violate our Terms & Conditions
        rules, it will be refused and you may encountered app restrictions or
        profile banishement.
      </p>
      <form className="form-recipes" onSubmit={handleSubmit}>
        <div className="form-title">
          <h3>Add an ingredient</h3>
          <p>(Quantities given for 100g)</p>
        </div>
        <div className="form-display">
          {Object.entries(formData).map(([key, value]) => (
            <label>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
              <input
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleInputChange}
                className="input-form"
              />
            </label>
          ))}
        </div>
        <div className="form-submit">
          <button className="button-form" type="submit">
            ADD INGREDIENT
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default FormIngredients;
