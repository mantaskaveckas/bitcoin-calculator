import React from "react";
import arrowIcon from "../../assets/arrow.svg";

export default () => (
  <div className="dropdown">
    <span className="dropdown-button">
      <span>Add Currency</span>
      <img className="dropdown-button-arrow" src={arrowIcon} alt="bottom" />
    </span>
  </div>
);
