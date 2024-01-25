import UserManagement from "../usermanagement/UserManagement";
import IngredientManagement from "../ingredientmanagement/IngredientManagement";
import "./Management.css";

function AdminUsers() {
  return (
    <div className="contain-management">
      <h2>Dashboard Admin</h2>
      <div className="user-management">
        <UserManagement />
      </div>
      <div className="ingredient-management">
        <IngredientManagement />
      </div>
    </div>
  );
}

export default AdminUsers;
