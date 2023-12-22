import React, { useEffect, useState } from "react";
import Liens from "../components/Liens";
import Header from "../components/Header";
import LineChartsGraph from "../components/graph/lineGraph/LineChartsGraph";
import RadarChartsGraph from "../components/graph/radarGraph/RadarChartsGraph";
import RadialBarChartsGraph from "../components/graph/radialBarGraph/RadialBarChartsGraph";
import AsideComponent from "../components/AsideComponent";
import calorieIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";
import "../styles/home.css";
import "../styles/bottomComponent.css";
import SimpleBarChartsGraph from "../components/graph/simpleBarGraph/SimpleBarChartsGraph";
import { useParams } from "react-router";
import { getUserData } from "../utils/hooks/index";
import Error from "./Error";
// import dataArray from "../mocks/dataMock";

const Home = () => {
  const { id } = useParams();
  const [userInfos, setUserInfos] = useState({});
  const [todayScore, setTodayScore] = useState();
  const [keyData, setKeyData] = useState({});
  const [userActivity, setUserActivity] = useState([]);
  const [userAverageSessions, setUserAverageSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getProfileData() {
      try {
        const userInfos = await getUserData(id, "");
        // console.log(userInfos);
        setUserInfos(userInfos.data.data.userInfos);
        setKeyData(userInfos.data.data.keyData);
        setTodayScore(
          userInfos.data.data.todayScore || userInfos.data.data.score
        );

        const activity = await getUserData(id, "activity");
        // console.log(activity);
        setUserActivity(activity.data.data.sessions);

        const averageSessions = await getUserData(id, "average-sessions");
        // console.log(averageSessions);
        setUserAverageSessions(averageSessions.data.data.sessions);

        const performance = await getUserData(id, "performance");
        // console.log(performance);
        setUserPerformance(performance.data.data.data);
      } catch (error) {
        // console.log(error);
        setError(true);
      }
    }
    getProfileData();
  }, [id]);

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
                  style={{ backgroundColor: "red", padding: 0 }}
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
                  content={keyData.calorieCount}
                  icone={calorieIcon}
                  description={"Calories"}
                />
                <AsideComponent
                  content={keyData.proteinCount}
                  icone={proteinIcon}
                  description={"Proteines"}
                />
                <AsideComponent
                  content={keyData.carbohydrateCount}
                  icone={carbsIcon}
                  description={"Glucides"}
                />
                <AsideComponent
                  content={keyData.lipidCount}
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
