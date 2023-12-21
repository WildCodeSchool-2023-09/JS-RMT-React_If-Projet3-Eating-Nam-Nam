import { Outlet } from "react-router-dom";
import NavbarAdmin from "../../components/navbarAdmin/NavbarAdmin";
import "./Admin.css";

function Admin() {
  return (
    <div className="contain-dashboard">
      <h2>Dashboard</h2>
      <Outlet />
      <NavbarAdmin />
    </div>
  );
}

export default Admin;
