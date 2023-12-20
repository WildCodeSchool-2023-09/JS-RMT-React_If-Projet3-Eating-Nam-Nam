import UserManagement from "../usermanagement/UserManagement";
import "./Management.css";

function AdminUsers() {
  return (
    <div className="containManagement">
      <div className="userManagement">
        <h3>Users</h3>
        <UserManagement />
      </div>
      <div className="recipeManagement">
        <h3>Recipes</h3>
      </div>
      <div className="ingredientManagement">
        <h3>Ingredients</h3>
      </div>
    </div>
  );
}

export default AdminUsers;
