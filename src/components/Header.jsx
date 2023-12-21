import React from "react";
import "../styles/header.css";

const Header = ({ userInfos }) => {
  return (
    <div className="header-container">
      <h1>
        {"Bonjour "}
        <span style={{ color: "red" }}>{userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier👏</p>
    </div>
  );
};

export default Header;
