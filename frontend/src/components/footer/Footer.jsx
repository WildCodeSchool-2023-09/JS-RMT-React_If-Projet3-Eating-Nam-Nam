import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2 className="footer-h2">
        EatingNamNam <br /> is a student project
      </h2>
      <p className="footer-p">
        <br />
        <Link to="/terms">Terms & Conditions</Link>
        <br />
        <Link to="/about">About Us</Link>
        <br />
        <br />
        Made with ❤️ by <br />
        <b>
          <Link to="https://github.com/valihna">Valériane</Link>,{" "}
          <Link to="https://github.com/Leslie2186">Leslie</Link>,{" "}
          <Link to="https://github.com/GreG6431">Greg</Link> &{" "}
          <Link to="https://github.com/ThibaudDps">Thibaud</Link>
        </b>
      </p>
    </div>
  );
}

export default Footer;
