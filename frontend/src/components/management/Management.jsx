import UserManagement from "../usermanagement/UserManagement";
import IngredientManagement from "../ingredientmanagement/IngredientManagement";
import "./Management.css";

function AdminUsers() {
  let ingredientVisible = false;
  const ingredientManagementVisible = () => {
    const dashboardIngredient = document.querySelector(".dashboard-ingredient");
    if (ingredientVisible) {
      dashboardIngredient.style.display = "none";
      ingredientVisible = false;
    } else {
      dashboardIngredient.style.display = "block";
      ingredientVisible = true;
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
        <div className="dashboard-ingredient" style={{ display: "none" }}>
          <IngredientManagement />
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
