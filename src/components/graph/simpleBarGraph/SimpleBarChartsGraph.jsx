import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SimpleBarChartsGraph = ({ data }) => {
  const formatYAxis = (formatDay) => {
    return formatDay + 1;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={data} barGap="10">
        <Tooltip />
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis
          tickLine={false}
          tick={{ fill: "#9B9EAC" }}
          tickFormatter={formatYAxis}
          tickMargin={15}
          stroke="#DEDEDE"
        />
        <YAxis
          orientation="right"
          tickMargin={30}
          stroke=""
          tick={{ fill: "#9B9EAC" }}
          // tickLine={false}
          // tickFormatter={false}
        />
        <Tooltip />
        <Bar
          dataKey="kilogram"
          fill="black"
          radius={[50, 50, 0, 0]}
          barSize={10}
        />
        <Bar
          dataKey="calories"
          fill="red"
          radius={[50, 50, 0, 0]}
          barSize={10}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChartsGraph;
