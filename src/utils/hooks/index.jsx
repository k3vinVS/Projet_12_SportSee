import axios from "axios";
import data from "../../mocks/data";
// const baseURL = axios.create({
//   baseURL: "http://localhost:3001/user",
// });

export const getUserData = (id, endpoint, mockData) => {
  // !mockData => données mockées et mockData => données API -----
  if (!mockData) {
    const userInfos =
      id === "12" ? data.USER_MAIN_DATA[0] : data.USER_MAIN_DATA[1];

    const activity =
      id === "12" ? data.USER_ACTIVITY[0] : data.USER_ACTIVITY[1];

    const averageSessions =
      id === "12"
        ? data.USER_AVERAGE_SESSIONS[0]
        : data.USER_AVERAGE_SESSIONS[1];

    const performance =
      id === "12" ? data.USER_PERFORMANCE[0] : data.USER_PERFORMANCE[1];

    // console.log(userInfos);

    return { id, userInfos, activity, averageSessions, performance };
  } else {
    // return baseURL.get(`/${id}/${endpoint}`);
    return axios.get(`http://localhost:3000/user/${id}/${endpoint}`);
  }
};
