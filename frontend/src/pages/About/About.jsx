import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo-ENN.svg";
import val from "../../assets/val.png";
import leslie from "../../assets/leslie.png";
import greg from "../../assets/greg.png";
import thib from "../../assets/thib.png";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-frame">
        <div className="about-title">
          <img className="about-logo" src={logo} alt="logo-ENN" />
          <h2 className="about-h2">Our Team</h2>
        </div>
        <div className="about-fish-val">
          <Link to="https://github.com/valihna">
            <img className="img-fish" src={val} alt="val" />{" "}
            <h4 className="about-name-val">Valériane</h4>
          </Link>
        </div>
        <div className="about-fish-leslie">
          <Link to="https://github.com/Leslie2186">
            <img className="img-fish" src={leslie} alt="leslie" />
            <h4 className="about-name-leslie">Leslie</h4>
          </Link>
        </div>
        <div className="about-fish-thib">
          <Link to="https://github.com/ThibaudDps">
            <img className="img-fish" src={thib} alt="thib" />
            <h4 className="about-name-thib">Thibaud</h4>
          </Link>
        </div>
        <div className="about-fish-greg">
          <Link to="https://github.com/GreG6431">
            <img className="img-fish" src={greg} alt="greg" />{" "}
            <h4 className="about-name-greg">Grégory</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
