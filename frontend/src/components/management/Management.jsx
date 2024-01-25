import UserManagement from "../usermanagement/UserManagement";
import RecipeManagement from "../recipemanagement/RecipeManagement";
import "./Management.css";

function AdminUsers() {
  let userVisible = false;
  let recipeVisible = false;

  const userManagementVisible = () => {
    const dashboardUser = document.querySelector(".dashboard-user");
    if (userVisible) {
      dashboardUser.style.display = "none";
      userVisible = false;
    } else {
      dashboardUser.style.display = "block";
      userVisible = true;
    }
  };

  const recipeManagementVisible = () => {
    const dashboardRecipe = document.querySelector(".dashboard-recipe");
    if (recipeVisible) {
      dashboardRecipe.style.display = "none";
      recipeVisible = false;
    } else {
      dashboardRecipe.style.display = "block";
      recipeVisible = true;
    }
  };

  return (
    <div className="contain-management">
      <h2>Dashboard Admin</h2>
      <div className="user-management">
        <button type="button" onClick={userManagementVisible}>
          User +
        </button>
        <div className="dashboard-user" style={{ display: "none" }}>
          <UserManagement />
        </div>
      </div>
      <div className="recipe-management">
        <button type="button" onClick={recipeManagementVisible}>
          Recipe +
        </button>
        <div className="dashboard-recipe" style={{ display: "none" }}>
          <RecipeManagement />
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
