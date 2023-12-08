import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const RadarChartsGraph = ({ dataUser }) => {
  console.log(dataUser.activity);
  // const user = dataUser.map((data) => data.kind);
  // console.log(user);
  // const radar1 = data.USER_PERFORMANCE[0]; // PREMIER USER
  // const radar2 = data.USER_PERFORMANCE[1].data; // DEUXIEME USER

  // const test = data.USER_PERFORMANCE[0].kind;
  // const myArray = Object.values(test);
  // console.log(test);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={dataUser}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="activity"
          style={{ fontSize: "0.4rem", color: "#FFF" }}
          tickMargin={0}
          tick={{ margin: 0 }}
        />
        <Radar dataKey="value" fill="rgba(255, 1, 1, 0.70)" />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartsGraph;
