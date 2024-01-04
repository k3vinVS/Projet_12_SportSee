import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserData } from "../utils/hooks/index";

import Liens from "../components/Liens";
import Header from "../components/Header";

import SimpleBarChartsGraph from "../components/graph/simpleBarGraph/SimpleBarChartsGraph";
import LineChartsGraph from "../components/graph/lineGraph/LineChartsGraph";
import RadarChartsGraph from "../components/graph/radarGraph/RadarChartsGraph";
import RadialBarChartsGraph from "../components/graph/radialBarGraph/RadialBarChartsGraph";

import AsideComponent from "../components/AsideComponent";
import calorieIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";

import Error from "./Error";

import "../styles/home.css";
import "../styles/bottomComponent.css";

const Home = (dataApi) => {
  const { id } = useParams();
  const [userInfos, setUserInfos] = useState({});
  const [todayScore, setTodayScore] = useState();
  const [userKeyData, setUserKeyData] = useState({});
  const [userActivity, setUserActivity] = useState([]);
  const [userAverageSessions, setUserAverageSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getProfileData() {
      try {
        const userInfos = await getUserData(id, "");
        // console.log(userInfos);

        const activity = await getUserData(id, "activity");
        // console.log(activity);

        const averageSessions = await getUserData(id, "average-sessions");

        const performance = await getUserData(id, "performance");

        // !dataApi => données mockées et dataApi => données API -----
        if (!dataApi) {
          // WHEN DATA IS FROM API ----------
          console.log("données API: ", userInfos);

          // USER_MAIN_DATA -----
          setUserInfos(userInfos.data.data.userInfos);
          setUserKeyData(userInfos.data.data.keyData);
          setTodayScore(userInfos.data.data.todayScore);

          // ACTIVITY -----
          setUserActivity(activity.data.data.sessions);

          // AVERAGESESSIONS -----
          setUserAverageSessions(averageSessions.data.data.sessions);

          // PERFORMANCE -----
          setUserPerformance(performance.data.data.data);
        } else {
          // WHEN DATA IS MOCKED ----------
          console.log("données mockées: ", userInfos);

          // USER_MAIN_DATA -----
          setUserInfos(userInfos.userInfos.userInfos);
          setUserKeyData(userInfos.userInfos.keyData);
          setTodayScore(
            userInfos.userInfos.todayScore || userInfos.userInfos.score
          );

          // ACTIVITY -----
          setUserActivity(userInfos.activity.sessions);

          // AVERAGESESSIONS -----
          setUserAverageSessions(userInfos.averageSessions.sessions);

          // PERFORMANCE -----
          setUserPerformance(userInfos.performance.data);
        }
      } catch (error) {
        console.log("ERROR: ", error);
        setError(true);
      }
    }
    getProfileData();
  }, [id, dataApi]);

  if (setError === true || error || !id) {
    return <Error />;
  } else {
    return (
      <div className="homepage">
        <Liens />
        <div className="dashboard">
          <Header userInfos={userInfos} />
          <div className="data-container">
            <div className="data-container_left">
              <div className="data-top">
                <SimpleBarChartsGraph userActivity={userActivity} />
              </div>
              <div className="data-bottom">
                <div
                  className="bottomComponent-container"
                  style={{ backgroundColor: "red" }}
                >
                  <LineChartsGraph userAverageSessions={userAverageSessions} />
                </div>
                <div
                  className="bottomComponent-container"
                  style={{ backgroundColor: "#282D30" }}
                >
                  <RadarChartsGraph userPerformance={userPerformance} />
                </div>
                <div
                  className="bottomComponent-container"
                  style={{ backgroundColor: "#FBFBFB" }}
                >
                  <RadialBarChartsGraph todayScore={todayScore} />
                </div>
              </div>
            </div>
            <div className="data-container_right">
              <div className="data-right">
                <AsideComponent
                  content={userKeyData.calorieCount}
                  icone={calorieIcon}
                  description={"Calories"}
                />
                <AsideComponent
                  content={userKeyData.proteinCount}
                  icone={proteinIcon}
                  description={"Proteines"}
                />
                <AsideComponent
                  content={userKeyData.carbohydrateCount}
                  icone={carbsIcon}
                  description={"Glucides"}
                />
                <AsideComponent
                  content={userKeyData.lipidCount}
                  icone={fatIcon}
                  description={"Lipides"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
