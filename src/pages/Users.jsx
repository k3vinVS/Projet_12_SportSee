import React from "react";
import { NavLink } from "react-router-dom";
import Liens from "../components/Liens";
import data from "../mocks/data";
// import { USER_MAIN_DATA } from "../mocks/data";
import "../styles/users.css";

const Users = () => {
  const users = data.USER_MAIN_DATA;
  // const users = USER_MAIN_DATA;
  // console.log(users);

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
