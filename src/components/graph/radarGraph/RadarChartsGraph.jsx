import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const RadarChartsGraph = ({ data }) => {
  const radar1 = data.USER_PERFORMANCE[0].data; // PREMIER USER

  const test = data.USER_PERFORMANCE[0].kind;
  const myArray = Object.values(test);
  // console.log(myArray);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={radar1}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" />
        <Radar dataKey="value" fill="rgba(255, 1, 1, 0.70)" />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartsGraph;
