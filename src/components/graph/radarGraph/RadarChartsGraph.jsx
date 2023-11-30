import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const RadarChartsGraph = ({ data }) => {
  // const kindInfos = data.kind;
  // for (let i = 0; kindInfos.length; i++) {
  //   console.log(kindInfos[i]);
  // }
  // console.log(kindInfos);
  // const valueOfData = data.data;
  // const dataValue = valueOfData.map((info) => info.value);
  // console.log(dataValue);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartsGraph;
