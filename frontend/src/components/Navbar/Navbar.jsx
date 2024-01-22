import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";

import profile from "../../assets/logo-profile.svg";
import mainLogoName from "../../assets/logo-ENN-name-hor.svg";

import "./Navbar.css";

function NavBar() {
  const { connected, setConnected } = useContext(AuthContext);
  const { infosUser } = useContext(AuthContext);
  return (
    <div>
      <nav className="nav">
        <NavLink to="/">
          <img src={mainLogoName} className="nav-logo" alt="ENN_logo" />
        </NavLink>
        <ul className="nav-menu">
          {" "}
          <div className="nav-pages">
            <li>
              <NavLink to="/about">About ENN</NavLink>
            </li>

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
          </div>
        </ul>
        <ul className="nav-menu">
          <div className="nav-login">
            {!connected.mail && (
              <>
                <li>
                  <NavLink to="/login">Log In</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
              </>
            )}
            {connected.role === 1 && (
              <li>
                <NavLink to="/administration/">Admin.</NavLink>
              </li>
            )}
            {connected.mail && (
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
            <li className="name-picture">
              <p className="name-user">{infosUser.username}</p>
              <img
                src={infosUser.picture || profile}
                className="profile-logo logouser"
                alt="profile_logo"
              />
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
