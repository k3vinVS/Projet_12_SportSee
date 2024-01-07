import React from "react";
import "../styles/asideComponent.css";

const AsideComponent = ({ content, icone, description }) => {
  // FORMAT THE CONTENT FOR AMERICAN DISPLAY (Displaying a comma every thousand) -----
  let contentFormat = [content].toLocaleString("en-US");
  return (
    <div className="asideComponent-container">
      <img src={icone} alt="icone" />
      <div className="text">
        {description === "Calories" ? (
          <h1>{contentFormat}kCal</h1>
        ) : (
          <h1>{contentFormat}g</h1>
        )}

        <small>{description}</small>
      </div>
    </div>
  );
};

export default AsideComponent;
