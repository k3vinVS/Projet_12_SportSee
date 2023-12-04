import React from "react";
import "../styles/asideComponent.css";

const AsideComponent = ({ data, content, icone, description }) => {
  return (
    <div className="asideComponent-container">
      <img src={icone} alt="icone" />
      <div className="text">
        {description === "Calories" ? (
          <h1>{content} kCal</h1>
        ) : (
          <h1>{content} g</h1>
        )}

        <small>{description}</small>
      </div>
    </div>
  );
};

export default AsideComponent;
