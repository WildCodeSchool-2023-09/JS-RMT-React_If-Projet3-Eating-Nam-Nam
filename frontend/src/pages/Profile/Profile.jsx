import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import connexion from "../../services/connexion";
import "./Profile.css";

function Profile() {
  const { infosUser } = useContext(AuthContext);
  const [regime, setRegime] = useState(null);

  useEffect(() => {
    const getRegimes = async () => {
      try {
        const { data } = await connexion.get(`/regime`);
        const userRegime = data.find((reg) => reg.id === infosUser.regime_id);
        setRegime(userRegime);
      } catch (error) {
        console.error(error);
      }
    };

    getRegimes();
  }, [infosUser.regime_id]);

  const formattedBirthday = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(infosUser.birthday));

  return (
    <div className="profile-page">
      <div className="profile-frame-name">
        <div className="profile-title">
          <img
            className="profile-pic"
            src={infosUser.picture}
            alt="profilePicture"
          />
          <h2 className="profile-h2">{infosUser.username}</h2>
        </div>
        <div className="profile-birthday">
          <h3>Birthday</h3>
          <p>{formattedBirthday}</p>
        </div>
        <div className="profile-regime">
          <h3>Regime</h3>
          <p>{regime?.name || "No regime selected"}</p>
        </div>
      </div>
      <div className="profile-page-sub">
        <div className="profile-frame-friends">
          <div className="profile-title">
            <h2 className="profile-h2">Friends</h2>
            <p>Place friends here</p>
          </div>
        </div>
        <div className="profile-frame-recipes">
          <div className="profile-title">
            <h2 className="profile-h2">Recipes</h2>
            <p>Place recipes here</p>
          </div>
        </div>
        <div className="profile-frame-favorites">
          <div className="profile-title">
            <h2 className="profile-h2">Favorites</h2>
            <p>Place favorites here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
