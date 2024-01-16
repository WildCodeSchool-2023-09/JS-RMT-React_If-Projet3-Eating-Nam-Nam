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
    <div>
      <nav className="nav">
        <NavLink to="/">
          <img src={mainLogoName} className="nav-logo" alt="ENN_logo" />
        </NavLink>
        <ul className="nav-menu">
          <li>
            <NavLink to="/about">About ENN</NavLink>
          </li>
          {!connected.mail && (
            <>
              {" "}
              <li>
                <NavLink to="/login">Log In</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
            </>
          )}
          {connected.mail && (
            <>
              <li>
                <NavLink to="/recipes">Recipes</NavLink>
              </li>
              <li>
                <NavLink to="/ingredients">Ingredients</NavLink>
              </li>
            </>
          )}
          {connected.role === 1 && (
            <li>
              <NavLink to="/administration/">Administration</NavLink>
            </li>
          )}
          {(connected.role === 0 || connected.role === 1) && (
            <li>
              <button
                type="button"
                className="button-logout"
                onClick={() => setConnected({ role: null })}
              >
                Log Out
              </button>
            </li>
          )}

          <li>
            <p>{infosUser.username}</p>
            <img src={infosUser.picture ? infosUser.picture : profile} className="profile-logo logouser" alt="profile_logo"/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
