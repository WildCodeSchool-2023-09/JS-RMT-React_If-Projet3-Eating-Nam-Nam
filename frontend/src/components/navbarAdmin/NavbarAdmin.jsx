import React from "react";
import { Link } from "react-router-dom";
import "./NavbarAdmin.css";
import management from "../../assets/boutonManagement.png";

function NavbarAdmin() {
  return (
    <div className="contain-navbar">
      <nav>
        <Link to="/administration/management">
          <img src={management} alt="Bouton Management" />
        </Link>
      </nav>
    </div>
  );
}

export default NavbarAdmin;
