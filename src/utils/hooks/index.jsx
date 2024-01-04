/* eslint-disable eqeqeq */
import axios from "axios";
import data from "../../mocks/data";

export const getUserData = (id, endpoint, dataApi) => {
  // "!dataApi" => données mockées et "dataApi" => données API -----
  // console.log(data.USER_MAIN_DATA[0].id !== id);
  // console.log(id);
  if (!dataApi) {
    // eslint-disable-next-line eqeqeq
    const userInfos = data.USER_MAIN_DATA.find((user) => user.id == id);
    // console.log(userInfos);

    // eslint-disable-next-line eqeqeq
    const activity = data.USER_ACTIVITY.find((user) => user.userId == id);

    const averageSessions = data.USER_AVERAGE_SESSIONS.find(
      (user) => user.userId == id
    );

    const performance = data.USER_PERFORMANCE.find((user) => user.userId == id);

    return { id, userInfos, activity, averageSessions, performance };
  } else {
    return axios.get(`http://localhost:3000/user/${id}/${endpoint}`);
  }
};
