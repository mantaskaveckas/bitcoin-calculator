import React from "react";
import deleteIcon from "../../assets/delete.svg";

export default ({ name, amount, withBorder }) => (
  <div className={`content-row ${withBorder ? "border-bottom" : ""}`}>
    <h3 className="content-row-title title-small">{name}</h3>
    <div className="content-row-info">
      <span className="content-row-amount">{amount}</span>
      <img className="content-row-delete" src={deleteIcon} alt="delete" />
    </div>
  </div>
);
