import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// MOCKED DATA & API -----
import { getUserData } from "../utils/dataService/index";

// HEADER PAGE + HEADER INFOS USER -----
import Header from "../components/Header";
import UserInfosHeader from "../components/UserInfosHeader";

// GRAPH -----
import SimpleBarChartsGraph from "../components/graph/simpleBarGraph/SimpleBarChartsGraph";
import LineChartsGraph from "../components/graph/lineGraph/LineChartsGraph";
import RadarChartsGraph from "../components/graph/radarGraph/RadarChartsGraph";
import RadialBarChartsGraph from "../components/graph/radialBarGraph/RadialBarChartsGraph";

// USER INFOS CARD -----
import AsideComponent from "../components/AsideComponent";
import calorieIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";

// ERROR PAGE -----
import Error from "./Error";

// IMPORT STYLE PAGE & COMPONENTS -----
import "../styles/home.css";
import "../styles/bottomComponent.css";

const Home = () => {
  const { id } = useParams();
  const [userInfos, setUserInfos] = useState({});
  const [todayScore, setTodayScore] = useState();
  const [userKeyData, setUserKeyData] = useState({});
  const [userActivity, setUserActivity] = useState([]);
  const [userAverageSessions, setUserAverageSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // FOR THE API'S DATA, THE VARIABLE MUST BE "true" -----
  // DON'T FORGET TO SWITCH THE SAME VARIABLE IN THE FILE "index.js" in "dataService" -----
  const API_MODE = process.env.REACT_APP_MODE_API === "true";

  useEffect(() => {
    async function getProfileData() {
      try {
        // DATA ----------
        const userInfos = await getUserData(id, "");

        // USER ACTIVITY'S INFOS FROM API -----
        const activity = await getUserData(id, "activity");
        // USER AVERAGE_SESSIONS'S INFOS FROM API -----
        const averageSessions = await getUserData(id, "average-sessions");
        // USER PERFORMANCE'S INFOS FROM API -----
        const performance = await getUserData(id, "performance");

        if (API_MODE) {
          // API'S DATA -----
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
          // MOCKED DATA -----
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
        // IF DATA API DOESN'T WORK  -----
        console.log("ERROR: ", error);
        setError(true);
      }
      setIsLoading(false);
    }
    getProfileData();
  }, [id, API_MODE]);

  if (setError === true || !id || error) {
    // ERROR PAGE -----
    return <Error />;
  } else {
    return (
      <>
        <div className="homepage">
          <Header />
          {isLoading ? (
            <div className="loader-wrapper">
              <div className="loader"></div>
              <p className="loading">Loading ...</p>
            </div>
          ) : (
            <div className="dashboard">
              <UserInfosHeader userInfos={userInfos} />
              <div className="data-container">
                {/* USER INFOS GRAPH */}
                <div className="data-container_left">
                  <div className="data-top">
                    <SimpleBarChartsGraph userActivity={userActivity} />
                  </div>
                  <div className="data-bottom">
                    <div
                      className="bottomComponent-container"
                      style={{ backgroundColor: "red" }}
                    >
                      <LineChartsGraph
                        userAverageSessions={userAverageSessions}
                      />
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
                    {/* USER INFOS CARDS */}
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
          )}
        </div>
      </>
    );
  }
};

export default Home;
