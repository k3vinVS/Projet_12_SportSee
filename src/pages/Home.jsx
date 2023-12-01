import React from "react";
import Liens from "../components/Liens";
import Header from "../components/Header";
import Poids from "../components/Poids";
import LineChartsGraph from "../components/graph/lineGraph/LineChartsGraph";
import RadarChartsGraph from "../components/graph/radarGraph/RadarChartsGraph";
import RadialBarChartsGraph from "../components/graph/radialBarGraph/RadialBarChartsGraph";
import AsideComponent from "../components/AsideComponent";
import data from "../mocks/dataMock";
import calorieIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";
import "../styles/home.css";
import "../styles/bottomComponent.css";
// import SimpleBarChartsGraph from "../components/graph/simpleBarGraph/SimpleBarChartsGraph";
// import { useFetch } from "../utils/hooks";
// import { useParams } from "react-router";

const Home = () => {
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
            <div className="data-bottom">
              <div
                className="bottomComponent-container"
                style={{ backgroundColor: "red" }}
              >
                <LineChartsGraph data={data} />
              </div>
              <div
                className="bottomComponent-container"
                style={{ backgroundColor: "#282D30" }}
              >
                <RadarChartsGraph data={data} />
              </div>
              <div
                className="bottomComponent-container"
                style={{ backgroundColor: "#FBFBFB" }}
              >
                <RadialBarChartsGraph data={data} />
              </div>
            </div>
          </div>
          <div className="data-container_right">
            <div className="data-right">
              <AsideComponent
                data={data}
                content={data.USER_MAIN_DATA[0].keyData.calorieCount}
                icone={calorieIcon}
              />
              <AsideComponent
                data={data}
                content={data.USER_MAIN_DATA[0].keyData.proteinCount}
                icone={proteinIcon}
              />
              <AsideComponent
                data={data}
                content={data.USER_MAIN_DATA[0].keyData.carbohydrateCount}
                icone={carbsIcon}
              />
              <AsideComponent
                data={data}
                content={data.USER_MAIN_DATA[0].keyData.lipidCount}
                icone={fatIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
