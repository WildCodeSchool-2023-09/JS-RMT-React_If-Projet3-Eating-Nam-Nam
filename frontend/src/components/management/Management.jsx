import { useState } from "react";
import UserManagement from "../usermanagement/UserManagement";
import IngredientManagement from "../ingredientmanagement/IngredientManagement";
import RecipeManagement from "../recipemanagement/RecipeManagement";
import "./Management.css";

function AdminUsers() {
  const [userVisible, setUserVisible] = useState(false);
  const [styleVisibleUser, setStyleVisibleUser] = useState("none");
  const [recipeVisible, setRecipeVisible] = useState(false);
  const [styleVisibleRecipe, setStyleVisibleRecipe] = useState("none");
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

  const userManagementVisible = () => {
    if (userVisible) {
      setStyleVisibleUser("none");
      setUserVisible(false);
    } else {
      setStyleVisibleUser("block");
      setUserVisible(true);
    }
  };

  const recipeManagementVisible = () => {
    if (recipeVisible) {
      setStyleVisibleRecipe("none");
      setRecipeVisible(false);
    } else {
      setStyleVisibleRecipe("block");
      setRecipeVisible(true);
    }
  };

  return (
    <div className="contain-management">
      <h2>Dashboard Admin</h2>
      <div className="user-management">
        <button type="button" onClick={userManagementVisible}>
          User +
        </button>
        <div className="dashboard-user" style={{ display: styleVisibleUser }}>
          <UserManagement />
        </div>
      </div>
      <div className="recipe-management">
        <button type="button" onClick={recipeManagementVisible}>
          Recipe +
        </button>
        <div
          className="dashboard-recipe"
          style={{ display: styleVisibleRecipe }}
        >
          <RecipeManagement />
        </div>
      </div>
      <div className="ingredient-management">
        <button type="button" onClick={ingredientManagementVisible}>
          Ingredient +
        </button>
        <div className="dashboard-ingredient" style={{ display: styleVisibleIngredient }}>
          <IngredientManagement />
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
