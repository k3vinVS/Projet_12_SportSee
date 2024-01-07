/* eslint-disable eqeqeq */
import axios from "axios";
import data from "../../mocks/data";

export const getUserData = (id, endpoint, dataApi) => {
  // "!dataApi" => MOCKED DATA & "dataApi" => API'S DATA -----
  if (!dataApi) {
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
  } else {
    // RETURN API'S DATA FROM API'S SERVER -----
    return axios.get(`http://localhost:3000/user/${id}/${endpoint}`);
  }
};
