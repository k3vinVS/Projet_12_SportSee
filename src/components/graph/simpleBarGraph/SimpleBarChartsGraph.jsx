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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            width: 39,
            height: 63,
            background: "#E60000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <p
            className="label"
            style={{ color: "white", fontSize: 7 }}
          >{`${payload[0].value} kg`}</p>
          <p
            className="label"
            style={{ color: "white", fontSize: 7 }}
          >{`${payload[1].value} Kcal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="70%">
      <BarChart width={500} height={300} data={data} barGap="10">
        <Tooltip content={CustomTooltip} />
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
