import React from "react";
import { Link } from "react-router-dom";

import "./Page404.css";
import saumon from "../../assets/saumon.png";

function Page404() {
  return (
    <div>
      <h2 className="p404-h2">
        Oops...
        <br /> Something's wrong
      </h2>
      <Link to="/" className="p-link">
        <p className="p-login">Go back to Home</p>
      </Link>
      <img className="img-saumon" src={saumon} alt="saumon" />
    </div>
  );
}

export default Page404;
