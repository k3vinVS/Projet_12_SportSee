import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
  PolarAngleAxis,
} from "recharts";

const RadialBarChartsGraph = ({ todayScore }) => {
  if (!todayScore) {
    return <p>Error</p>;
  }
  const data = [
    {
      score: todayScore,
    },
  ];

  const style = {
    top: "65%",
    right: 25,
    lineHeight: "15px",
    fontSize: "0.6rem",
  };

  // Convertir les "todayScore" en pourcentage ("fixed=0" permet d'avoir des nombre entiers) ---
  const toPercent = (decimal, fixed = 0) =>
    `${(decimal * 100).toFixed(fixed)}%`;

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
        data={data}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          tick={false}
          angleAxisId={0}
        />
        <RadialBar
          minAngle={90}
          clockWise
          background={{ opacity: "0.1" }}
          cornerRadius={5}
          dataKey="score"
          style={{ fill: "red" }}
          label={{
            fill: "#282D30",
            position: "center",
            fontSize: "0.8rem",
            fontWeight: 700,
            formatter: toPercent,
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
