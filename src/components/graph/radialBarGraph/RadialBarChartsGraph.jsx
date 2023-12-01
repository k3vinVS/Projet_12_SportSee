import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from "recharts";

const RadialBarChartsGraph = () => {
  // const kpi1 = data.USER_MAIN_DATA[0].todayScore; // PREMIER USER
  // const kpi2 = data.USER_MAIN_DATA[1]; // DEUXIEME USER

  const data = [
    {
      name: "12",
      uv: 31.47,
      pv: 2400,
      fill: "#8884d8",
    },
  ];

  const style = {
    top: "60%",
    right: 8,
    transform: "translate(0, -10%)",
    lineHeight: "15px",
    color: "black",
    fontSize: "0.94rem",
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
        endAngle={70}
        // endAngle={-30}
        cx="50%"
        cy="70%"
        innerRadius="90%"
        // outerRadius="80%"
        barSize={10}
        data={data}
        label={{ fill: "red" }}
      >
        <RadialBar
          minAngle={0}
          // clockWise
          // background
          cornerRadius={5}
          dataKey="uv"
          style={{ fill: "red" }}
          allowDataOverFlow={true}
          domain={[0, 100]}
        />
        <Legend
          iconSize={0}
          width={100}
          height={40}
          layout="horizontal"
          verticalAlign="center"
          align="center"
          wrapperStyle={style}
          payload={[
            {
              value: "12%", // A REMPLACER -----
              color: "#282D30",
            },
            { value: "de votre objectif", color: "#74798C" },
          ]}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartsGraph;
