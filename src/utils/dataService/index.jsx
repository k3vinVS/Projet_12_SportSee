/* eslint-disable eqeqeq */
import axios from "axios";
import data from "../../mocks/data";

// FOR THE API'S DATA, THE VARIABLE MUST BE "true" -----
// DON'T FORGET TO SWITCH THE SAME VARIABLE IN THE COMPONENT "Home.jsx" -----
const API_MODE = process.env.REACT_APP_MODE_API === "true";

// DATA API -----
export const getUserData = (id, endpoint) => {
  if (API_MODE) {
    return axios.get(`http://localhost:3000/user/${id}/${endpoint}`);
  } else {
    // USER PRINCIPAL INFOS -----
    const userInfos = data.USER_MAIN_DATA.find((user) => user.id == id);

    // USER ACTIVITY'S INFOS FOR GRAPH -----
    const activity = data.USER_ACTIVITY.find((user) => user.userId == id);

    // USER AVERAGE_SESSIONS'S INFOS FOR GRAPH -----
    const averageSessions = data.USER_AVERAGE_SESSIONS.find(
      (user) => user.userId == id
    );

    // USER PERFORMANCE'S INFOS FOR GRAPH -----
    const performance = data.USER_PERFORMANCE.find((user) => user.userId == id);

    return { id, userInfos, activity, averageSessions, performance };
  }
};
