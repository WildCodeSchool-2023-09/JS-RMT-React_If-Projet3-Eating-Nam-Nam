import React from "react";
import { Link } from "react-router-dom";
import "./NavbarAdmin.css";
import dashboard from "../../assets/boutonDashboard.png";
import management from "../../assets/boutonManagement.png";

function NavbarAdmin() {
  return (
    <div className="containNavbar">
      <nav>
        <Link to="/administration/management">
          <img src={management} alt="Bouton Management" />
        </Link>
        <Link to="/administration">
          <img src={dashboard} alt="Bouton Dashboard" />
        </Link>
      </nav>
    </div>
  );
}

export default NavbarAdmin;
