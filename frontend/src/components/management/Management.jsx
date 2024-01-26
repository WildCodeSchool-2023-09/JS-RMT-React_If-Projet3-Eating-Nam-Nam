import { useState } from "react";
import UserManagement from "../usermanagement/UserManagement";
import IngredientManagement from "../ingredientmanagement/IngredientManagement";
import "./Management.css";

function AdminUsers() {
  const [ingredientVisible, setIngredientVisible] = useState(false);
  const [styleVisibleIngredient, setStyleVisibleIngredient] = useState("none");
  const ingredientManagementVisible = () => {
    if (ingredientVisible) {
      setStyleVisibleIngredient("none");
      setIngredientVisible(false);
    } else {
      setStyleVisibleIngredient("block");
      setIngredientVisible(true);
    }
  };

  return (
    <div className="contain-management">
      <h2>Dashboard Admin</h2>
      <div className="user-management">
        <UserManagement />
      </div>

      <div className="ingredient-management">
        <button type="button" onClick={ingredientManagementVisible}>
          Ingredient +
        </button>
        <div
          className="dashboard-ingredient"
          style={{ display: styleVisibleIngredient }}
        >
          <IngredientManagement />
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
