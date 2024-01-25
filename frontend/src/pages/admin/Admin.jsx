import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";
import Navbar from "../../components/Navbar/Navbar";
import NavbarAdmin from "../../components/navbarAdmin/NavbarAdmin";
import "./Admin.css";

function Admin() {
  const { connected } = useContext(AuthContext);

  if (connected.is_admin === 1) {
    return (
      <div className="contain-dashboard">
        <Navbar />
        <Outlet />
        <NavbarAdmin />
      </div>
    );
  }

  return <Navigate to="/" replace />;
}

export default Admin;
