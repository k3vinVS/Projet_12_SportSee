import React from "react";

import "../styles/asideComponent.css";

const AsideComponent = ({ data, content, icone }) => {
  return (
    <div className="asideComponent-container">
      <img src={icone} alt="icone" />
      <div className="text">
        <h1>{content} kCal</h1>
        <small>Calories</small>
      </div>
    </div>
  );
};

export default AsideComponent;
