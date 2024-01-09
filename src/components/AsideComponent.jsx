import React from "react";
import { dataUnity } from "../utils/modelizeData/userPerfModelize";
import "../styles/asideComponent.css";

const AsideComponent = ({ content, icone, description }) => {
  // FORMAT THE CONTENT FOR AMERICAN DISPLAY (Displaying a comma every thousand) & THE UNITY -----
  let contentData = dataUnity(content, description);

  return (
    <div className="asideComponent-container">
      <img src={icone} alt="icone" />
      <div className="text">
        <h1>{contentData}</h1>
        <small>{description}</small>
      </div>
    </div>
  );
};

export default AsideComponent;
