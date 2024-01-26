import React from "react";
import { Link } from "react-router-dom";
import "./NavbarAdmin.css";
import management from "../../assets/buttonManagement.png";
import graphics from "../../assets/buttonDashboard.png";

function NavbarAdmin() {
  return (
    <div className="contain-navbar">
      <nav>
        <Link to="/administration/management">
          <img src={management} alt="Bouton Management" />
        </Link>
        <Link to="/administration">
          <img src={graphics} alt="Bouton Dashboard" />
        </Link>
      </nav>
    </div>
  );
}

export default NavbarAdmin;
