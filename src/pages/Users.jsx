import React from "react";
import data from "../mocks/dataMock";
import "../styles/users.css";
import { NavLink } from "react-router-dom";
import Liens from "../components/Liens";

const Users = () => {
  const users = data.USER_MAIN_DATA;
  
  return (
    <>
      <Liens />
      <div className="users-container">
        {users.map((user) => (
          <NavLink key={user.id} className="profile" to={`/user/${user.id}`}>
            <h1>{user.userInfos.firstName}</h1>
            <h2>{user.userInfos.lastName}</h2>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Users;
