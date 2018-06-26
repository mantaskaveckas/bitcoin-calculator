import React from "react";

export default ({ children }) => (
  <header className="header">
    <div className="col-6 col-sm-12">
      <h1 className="header-title">Bitcoin Exchange</h1>
    </div>
    <div className="col-6 col-sm-12">{children}</div>
  </header>
);
