import React from "react";
import redPoint from "../assets/red-point.png";
import blackPoint from "../assets/black-point.png";
import "../styles/poids.css";

const Poids = () => {
  return (
    <div className="poids-container">
      <div className="header">
        <p>Activité quotidienne</p>
        <div className="data-legend">
          <span>
            <img src={blackPoint} alt="index couleur" />
            <p>Poids (kg)</p>
          </span>
          <span>
            <img src={redPoint} alt="index couleur" />
            <p>Calories brûlées (kCal)</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Poids;
