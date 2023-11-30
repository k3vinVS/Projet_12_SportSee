import React from "react";
import redPoint from "../assets/red-point.png";
import blackPoint from "../assets/black-point.png";
import SimpleBarChartsGraph from "../components/graph/simpleBarGraph/SimpleBarChartsGraph";
import "../styles/poids.css";

const Poids = ({ data }) => {
  const activity1 = data.USER_ACTIVITY[0].sessions; // PREMIER USER
  // const activity2 = data.USER_ACTIVITY[1].sessions; // DEUXIEME USER
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
      <SimpleBarChartsGraph data={activity1} />
    </div>
  );
};

export default Poids;
