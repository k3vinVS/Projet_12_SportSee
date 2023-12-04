import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
  PolarAngleAxis,
} from "recharts";

const RadialBarChartsGraph = ({ data }) => {
  const kpi1 = data.USER_MAIN_DATA; // PREMIER USER
  // const kpi2 = data.USER_MAIN_DATA[1]; // DEUXIEME USER
  // const pourcentage = `${kpi1[0].todayScore * 100}`;

  // console.log(kpi1);
  // console.log(pourcentage);

  // const dataExemple = [
  //   {
  //     name: "12",
  //     uv: 31.47,
  //     pv: 2400,
  //     fill: "#8884d8",
  //   },
  // ];
  // console.log(dataExemple);

  const style = {
    top: "75%",
    right: 8,
    lineHeight: "15px",
    fontSize: "0.9rem",
  };

  // Convertir les "todayScore" en pourcentage ---
  return (
    <ResponsiveContainer width="100%" height="100%">
      <span
        style={{
          color: "#20253A",
          fontSize: "0.94rem",
          position: "absolute",
          margin: "0.5rem",
        }}
      >
        Score
      </span>
      <RadialBarChart
        startAngle={210}
        endAngle={-30}
        cx="50%"
        cy="70%"
        innerRadius="80%"
        barSize={5}
        data={kpi1}
      >
        <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
        <RadialBar
          minAngle={90}
          clockWise
          background
          cornerRadius={5}
          dataKey="todayScore"
          style={{ fill: "red" }}
          label={{ fill: "#282D30", position: "center", fontSize: "0.8rem" }}
        />
        <Legend
          iconSize={0}
          width={100}
          height={4}
          layout="horizontal"
          verticalAlign="middle"
          align="center"
          wrapperStyle={style}
          payload={[{ value: "de votre objectif", color: "#74798C" }]}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartsGraph;
