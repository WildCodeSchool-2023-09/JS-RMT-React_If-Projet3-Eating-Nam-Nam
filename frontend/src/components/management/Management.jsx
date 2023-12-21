import UserManagement from "../usermanagement/UserManagement";
import "./Management.css";

function AdminUsers() {
  return (
    <div className="contain-management">
      <div className="user-management">
        <h3>Users</h3>
        <UserManagement />
      </div>
    </div>
  );
}

export default AdminUsers;
