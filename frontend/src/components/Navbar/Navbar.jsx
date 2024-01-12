import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";
import mainLogoName from "../../assets/logo-ENN-name-hor.svg";
import mainLogoName2 from "../../assets/logo-ENN-name-ver.svg";
import profile from "../../assets/logo-profile.svg";

import "./Navbar.css";

function NavBar() {
  const { infosUser } = useContext(AuthContext);
  return (
    <div className="nav">
      <NavLink to="/">
        <img src={mainLogoName} className="nav-logo" alt="ENN_logo" />
        <img src={mainLogoName2} className="nav-logo2" alt="ENN_logo2" />
      </NavLink>
      <nav className="nav-menu">
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/ingredients">Ingredients</NavLink>
        <NavLink to="/about">About ENN</NavLink>
      </nav>
      <nav className="nav-log">
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <img
          src={infosUser.picture ? infosUser.picture : profile}
          className="profile-logo logouser"
          alt="profile_logo"
        />
        <p>{infosUser.username}</p>
      </nav>
    </div>
  );
}

export default NavBar;
