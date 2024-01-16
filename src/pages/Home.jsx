// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import React from "react";

// MOCKED DATA & API -----
import { useFetch } from "../utils/dataService/index";

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
  const {
    id,
    userInfos,
    userTodayScore,
    userKeyData,
    userActivity,
    userAverageSessions,
    userPerformance,
    isLoading,
    error,
  } = useFetch();
  // console.log(userInfos);

  if (!id || error) {
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
                      <RadialBarChartsGraph todayScore={userTodayScore} />
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
