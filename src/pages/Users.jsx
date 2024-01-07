import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import data from "../mocks/data";
import "../styles/users.css";

const Users = () => {
  const users = data.USER_MAIN_DATA; // MOCKED DATA OF USERS -----

  return (
    <>
      <Header />
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
