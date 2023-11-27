import React from "react";
import icone from "../assets/calories-icon.png";
import "../styles/asideComponent.css";

const AsideComponent = () => {
  return (
    <div className="asideComponent-container">
      <img src={icone} alt="icone" />
      <div className="text">
        <h1>1,930kCal</h1>
        <small>Calories</small>
      </div>
    </div>
  );
};

export default AsideComponent;
