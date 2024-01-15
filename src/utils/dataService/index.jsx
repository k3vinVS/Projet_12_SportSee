/* eslint-disable eqeqeq */
import axios from "axios";
import data from "../../mocks/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// FOR THE API'S DATA, THE VARIABLE MUST BE "API" -----
const ENV_MODE = process.env.REACT_APP_MODE;

export function useFetch() {
  const { id } = useParams();
  const [userInfos, setUserInfos] = useState({});
  const [userTodayScore, setUserTodayScore] = useState();
  const [userKeyData, setUserKeyData] = useState({});
  const [userActivity, setUserActivity] = useState([]);
  const [userAverageSessions, setUserAverageSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // ---------- MOCKED DATA ----------
      const userInfosMock = data.USER_MAIN_DATA.find((user) => user.id == id);
      const userActivityMock = data.USER_ACTIVITY.find(
        (user) => user.userId == id
      );
      const userAverageSessionsMock = data.USER_AVERAGE_SESSIONS.find(
        (user) => user.userId == id
      );
      const userPerformanceMock = data.USER_PERFORMANCE.find(
        (user) => user.userId == id
      );

      // IF THE MOCKED DATA IS NOT ACCESSIBLE -----
      if (
        (!userInfosMock,
        !userActivityMock,
        !userAverageSessionsMock,
        !userPerformanceMock)
      ) {
        setError(true);
      }

      // TO KNOW IF THE SERVER IS CONNECTED -----
      fetch(`http://localhost:3000/user/${id}`)
        .then((response) => {
          if (response.ok) {
            // console.log("serveur connecté");
            setIsConnected(true);
          } else {
            // console.log("serveur non connecté");
            setIsConnected(false);
          }
        })
        .catch(() => console.log("API'S DATA ERROR"));

      if (ENV_MODE === "MOCK" && !isConnected) {
        console.log("MOCKED DATA");
        // console.log(userInfosMock);
        setUserInfos(userInfosMock.userInfos);
        setUserKeyData(userInfosMock.keyData);
        setUserTodayScore(userInfosMock.todayScore || userInfosMock.score);
        setUserActivity(userActivityMock.sessions);
        setUserAverageSessions(userAverageSessionsMock.sessions);
        setUserPerformance(userPerformanceMock.data);
      } else if (isConnected) {
        console.log("API'S SERVER");
        try {
          // ---------- API'S DATA ----------
          const userInfos = await axios.get(
            `http://localhost:3000/user/${id}/`
          );
          const userActivity = await axios.get(
            `http://localhost:3000/user/${id}/${"activity"}`
          );
          const userAverageSessions = await axios.get(
            `http://localhost:3000/user/${id}/${"average-sessions"}`
          );
          const userPerformance = await axios.get(
            `http://localhost:3000/user/${id}/${"performance"}`
          );
          setUserInfos(userInfos.data.data.userInfos);
          setUserKeyData(userInfos.data.data.keyData);
          setUserTodayScore(
            userInfos.data.data.todayScore || userInfos.data.data.score
          );
          setUserActivity(userActivity.data.data.sessions);
          setUserAverageSessions(userAverageSessions.data.data.sessions);
          setUserPerformance(userPerformance.data.data.data);
        } catch (err) {
          console.log(err);
          setError(true);
        }
      }
      setIsLoading(false);
    }
    fetchData();
  }, [id, isConnected]);

  return {
    id,
    userInfos,
    userTodayScore,
    userKeyData,
    userActivity,
    userAverageSessions,
    userPerformance,
    isLoading,
    error,
  };
}

// export const getUserData = (id, endpoint) => {
//   if (API_MODE) {
//     // DATA API -----
//     return axios.get(`http://localhost:3000/user/${id}/${endpoint}`);
//   } else {
//     // MOCKED DATA -----
//     // USER PRINCIPAL INFOS -----
//     const userInfos = data.USER_MAIN_DATA.find((user) => user.id == id);
//     // USER ACTIVITY'S INFOS FOR GRAPH -----
//     const activity = data.USER_ACTIVITY.find((user) => user.userId == id);
//     // USER AVERAGE_SESSIONS'S INFOS FOR GRAPH -----
//     const averageSessions = data.USER_AVERAGE_SESSIONS.find(
//       (user) => user.userId == id
//     );
//     // USER PERFORMANCE'S INFOS FOR GRAPH -----
//     const performance = data.USER_PERFORMANCE.find((user) => user.userId == id);
//     return { id, userInfos, activity, averageSessions, performance };
//   }
// };
