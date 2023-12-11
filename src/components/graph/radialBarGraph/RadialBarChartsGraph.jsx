import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
  PolarAngleAxis,
} from "recharts";

/**
 *
 * @param {*} param0
 * @returns
 */
const RadialBarChartsGraph = ({ data }) => {
  const kpi1 = data.USER_MAIN_DATA; // PREMIER USER
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
    top: "65%",
    right: 8,
    lineHeight: "15px",
    fontSize: "0.6rem",
  };

  // Convertir les "todayScore" en pourcentage ---
  return (
    <ResponsiveContainer width="100%" height="100%">
      <span
        style={{
          color: "#20253A",
          fontSize: "0.94rem",
          fontWeight: 500,
          position: "absolute",
          margin: "0.1rem",
          paddingTop: "0.5rem",
        }}
      >
        Score
      </span>
      <RadialBarChart
        startAngle={180}
        endAngle={-180}
        cx="50%"
        cy="60%"
        innerRadius="80%"
        barSize={5}
        data={kpi1}
      >
        <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
        <RadialBar
          minAngle={90}
          clockWise
          background={{ opacity: "0.1" }}
          cornerRadius={5}
          dataKey="todayScore"
          style={{ fill: "red" }}
          label={{
            fill: "#282D30",
            position: "center",
            fontSize: "0.8rem",
            fontWeight: 700,
          }}
        />
        <Legend
          iconSize={0}
          width={100}
          height={4}
          layout="horizontal"
          verticalAlign="middle"
          align="center"
          wrapperStyle={style}
          payload={[
            { value: "de votre objectif", color: "#74798C", fontWeight: 500 },
          ]}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartsGraph;
