import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const LineChartsGraph = ({ data }) => {
  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
  const formatXAxis = (tickItem) => {
    return daysOfWeek[tickItem];
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            width: 39,
            height: 25,
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            className="label"
            style={{ color: "black", fontSize: 8 }}
          >{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%" fill="red">
      <LineChart width={500} height={300} data={data}>
        <XAxis
          tickFormatter={formatXAxis}
          stroke=""
          tickMargin={15}
          tick={{ fill: "#fff", fontSize: "12" }}
        />
        <Tooltip contentStyle={{ fontSize: 8 }} content={<CustomTooltip />} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#fff"
          dot={false}
          activeDot={{ r: 5, fill: "#fff" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartsGraph;
