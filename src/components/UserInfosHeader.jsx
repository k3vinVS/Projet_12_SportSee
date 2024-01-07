import React from "react";
import "../styles/header.css";

const UserInfosHeader = ({ userInfos }) => {
  return (
    <div className="header-container">
      <h1>
        {"Bonjour "}
        {/* Display user's first names when logging into their profile */}
        <span style={{ color: "red" }}>{userInfos.firstName}</span>
      </h1>
      <p>Félicitation! Vous avez explosé vos objectifs hier👏</p>
    </div>
  );
};

export default UserInfosHeader;
