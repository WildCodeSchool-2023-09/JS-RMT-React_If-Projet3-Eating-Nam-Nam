import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";
import NavbarAdmin from "../../components/navbarAdmin/NavbarAdmin";
import "./Admin.css";

function Admin() {
  const { connected } = useContext(AuthContext);

  if (connected.role === 1) {
    return (
      <div className="contain-dashboard">
        <h2>Dashboard</h2>
        <Outlet />
        <NavbarAdmin />
      </div>
    );
  }

  return <Navigate to="/" replace />;
}

export default Admin;
