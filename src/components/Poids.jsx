import React from "react";
import redPoint from "../assets/red-point.png";
import blackPoint from "../assets/black-point.png";
import SimpleBarChartsGraph from "../components/graph/simpleBarGraph/SimpleBarChartsGraph";
import "../styles/poids.css";
import { dataUser } from "../utils/modelizeData/userPerfModelize";

const Poids = ({ data }) => {
  const user = dataUser(data.USER_ACTIVITY);
  // console.log(user);

  return (
    <div className="poids-container">
      <div className="header">
        <p>Activité quotidienne</p>
        {/* <div className="data-legend">
          <span>
            <img src={blackPoint} alt="index couleur" />
            <p>Poids (kg)</p>
          </span>
          <span>
            <img src={redPoint} alt="index couleur" />
            <p>Calories brûlées (kCal)</p>
          </span>
        </div> */}
      </div>
      <SimpleBarChartsGraph data={user[0]} />
    </div>
  );
};

export default Poids;
