import UserManagement from "../usermanagement/UserManagement";
import RecipeManagement from "../recipemanagement/RecipeManagement";
import "./Management.css";

function AdminUsers() {
  return (
    <div className="contain-management">
      <h2>Dashboard Admin</h2>
      <div className="user-management">
        <UserManagement />
      </div>
      <div className="recipe-management">
        <RecipeManagement />
      </div>
    </div>
  );
}

export default AdminUsers;
