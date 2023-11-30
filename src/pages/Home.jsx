import React from "react";
import Liens from "../components/Liens";
import Header from "../components/Header";
import Poids from "../components/Poids";
import LineChartsGraph from "../components/graph/lineGraph/LineChartsGraph";
import AsideComponent from "../components/AsideComponent";
import data from "../mocks/dataMock";
import "../styles/home.css";
import "../styles/bottomComponent.css";
// import SimpleBarChartsGraph from "../components/graph/simpleBarGraph/SimpleBarChartsGraph";
// import RadarChartsGraph from "../components/graph/radarGraph/RadarChartsGraph";
// import RadialBarChartsGraph from "../components/graph/radialBarGraph/RadialBarChartsGraph";
// import { useFetch } from "../utils/hooks";
// import { useParams } from "react-router";
// import BottomComponent from "../components/BottomComponent";

const Home = () => {
  const objectif1 = data.USER_AVERAGE_SESSIONS[0].sessions; // PREMIER USER
  // const objectif2 = data.USER_AVERAGE_SESSIONS[1].sessions; // DEUXIEME USER

  // const kpi1 = data.USER_MAIN_DATA[0]; // PREMIER USER
  // const kpi2 = data.USER_MAIN_DATA[1]; // DEUXIEME USER

  // const radar1 = data.USER_PERFORMANCE[0].data; // PREMIER USER
  // const radar2 = data.USER_PERFORMANCE[1].data; // DEUXIEME USER

  // console.log(objectif1);

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
            <div className="bottomComponent-container">
              <LineChartsGraph data={objectif1} />
            </div>
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
