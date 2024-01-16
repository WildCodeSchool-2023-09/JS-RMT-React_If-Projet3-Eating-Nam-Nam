import React from "react";

import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-frame-name">
        <div className="profile-title">
          <img
            className="profile-pic"
            src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/656_v9_bb.jpg"
            alt=""
          />
          <h2 className="profile-h2">Name</h2>
        </div>
      </div>
      <div className="profile-page-sub">
        <div className="profile-frame-friends">
          <div className="profile-title">
            <h2 className="profile-h2">Friends</h2>
          </div>
        </div>
        <div className="profile-frame-recipes">
          <div className="profile-title">
            <h2 className="profile-h2">Recipes</h2>
          </div>
        </div>
        <div className="profile-frame-favorites">
          <div className="profile-title">
            <h2 className="profile-h2">Favorites</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
