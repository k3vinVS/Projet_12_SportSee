import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { dataPerformanceFormat } from "../../../utils/modelizeData/userPerfModelize";

const RadarChartsGraph = ({ data }) => {
  const user = dataPerformanceFormat(data.USER_PERFORMANCE[0].data); // Fonction qui permet de trier les informations des données mokées avant utilisation
  // console.log(user);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="49%" data={user}>
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
