import React from "react";
import Liens from "../components/Liens";
import Header from "../components/Header";
// import SimpleBarChartsGraph from "../components/graph/simpleBarGraph/SimpleBarChartsGraph";
// import LineChartsGraph from "../components/graph/lineGraph/LineChartsGraph";
// import RadarChartsGraph from "../components/graph/radarGraph/RadarChartsGraph";
// import RadialBarChartsGraph from "../components/graph/radialBarGraph/RadialBarChartsGraph";
import AsideComponent from "../components/AsideComponent";
import data from "../mocks/dataMock";
import "../styles/home.css";
// import { useFetch } from "../utils/hooks";
// import { useParams } from "react-router";
import Poids from "../components/Poids";
// import BottomComponent from "../components/BottomComponent";

const Home = () => {
  // const activity1 = data.USER_ACTIVITY[0].sessions; // PREMIER USER
  // const activity2 = data.USER_ACTIVITY[1].sessions; // DEUXIEME USER

  // const objectif1 = data.USER_AVERAGE_SESSIONS[0].sessions; // PREMIER USER
  // const objectif2 = data.USER_AVERAGE_SESSIONS[1].sessions; // DEUXIEME USER

  // const kpi1 = data.USER_MAIN_DATA[0]; // PREMIER USER
  // const kpi2 = data.USER_MAIN_DATA[1]; // DEUXIEME USER

  // const radar1 = data.USER_PERFORMANCE[0].data; // PREMIER USER
  // const radar2 = data.USER_PERFORMANCE[1].data; // DEUXIEME USER

  // console.log(activity2[0].day);

  return (
    <div className="homepage">
      <Liens />
      <div className="dashboard">
        <Header />
        <div className="data-container">
          <div className="data-container_left">
            <div className="data-top">
              <Poids data={data} />
            </div>
            {/* <LineChartsGraph data={objectif1} /> */}
            {/* <RadialBarChartsGraph data={kpi1} /> */}
            {/* <RadarChartsGraph data={radar1} /> */}
            {/* <div className="data-bottom">
              <BottomComponent />
              <BottomComponent />
              <BottomComponent />
            </div> */}
          </div>
          <div className="data-container_right">
            <div className="data-right">
              <AsideComponent />
              <AsideComponent />
              <AsideComponent />
              <AsideComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
