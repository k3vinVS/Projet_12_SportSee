import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const RadialBarChartsGraph = ({ data }) => {
  // Convertir les "todayScore" en pourcentage ---
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        startAngle={180}
        endAngle={0}
        cx="50%"
        cy="50%"
        innerRadius="90%"
        // outerRadius="80%"
        barSize={10}
        data={data}
      >
        <RadialBar minAngle={15} clockWise dataKey="data" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartsGraph;
