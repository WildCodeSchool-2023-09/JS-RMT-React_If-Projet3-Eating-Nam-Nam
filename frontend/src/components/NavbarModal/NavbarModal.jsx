import React from "react";

import { NavLink } from "react-router-dom";

import profile from "../../assets/logo-profile.svg";
import "./NavbarModal.css";

function NavbarModal() {
  return (
    <div>
      <nav className="nav-menu-modal">
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/ingredients">Ingredients</NavLink>
        <img src={profile} className="profile-logo" alt="profile_logo" />
      </nav>
    </div>
  );
}

export default NavbarModal;
