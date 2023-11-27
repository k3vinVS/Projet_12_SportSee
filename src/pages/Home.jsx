import React, { useEffect } from "react";
import Liens from "../components/Liens";
import Header from "../components/Header";
import Poids from "../components/Poids";
import BottomComponent from "../components/BottomComponent";
import AsideComponent from "../components/AsideComponent";
// import { useFetch } from "../utils/hooks";
import "../styles/home.css";

const Home = () => {
  // const { data, error } = useFetch(`http://localhost:3000`);

  // console.log(data);

  // if (error) {
  //   return console.log("Oups il y a un problème");
  // }

  useEffect(() => {
    fetch("http://localhost:3000");
  });

  return (
    <div className="homepage">
      <Liens />
      <div className="dashboard">
        <Header />
        <div className="data-container">
          <div className="data-container_left">
            <div className="data-top">
              <Poids />
            </div>
            <div className="data-bottom">
              <BottomComponent />
              <BottomComponent />
              <BottomComponent />
            </div>
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
