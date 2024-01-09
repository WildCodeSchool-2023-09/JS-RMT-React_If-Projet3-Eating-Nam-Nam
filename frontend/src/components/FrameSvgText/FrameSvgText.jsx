import React from "react";
import PropTypes from "prop-types";

import SVGS from "../../assets/svg/Ingredients";

function FrameSvgText({ svgPath, title, description }) {
  return (
    <div className="square-img-text">
      <div className="square-img">{SVGS[svgPath]}</div>
      <div className="square-text">
        <h4>{title}</h4>
        <div
          className="line"
          style={{ width: 92, height: 0, border: "0.5px #2E2E2E solid" }}
        />
        <p>{description}</p>
      </div>
    </div>
  );
}

FrameSvgText.propTypes = {
  svgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default FrameSvgText;
