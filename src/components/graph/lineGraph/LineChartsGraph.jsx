import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  YAxis,
} from "recharts";

const LineChartsGraph = ({ userAverageSessions }) => {
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

  const legendContent = () => {
    return <span className="legend-container">Durée moyenne des sessions</span>;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width="100%"
        height="100%"
        data={userAverageSessions}
        margin={{ right: 10, left: 10, bottom: -30 }}
      >
        <XAxis
          tickFormatter={formatXAxis}
          stroke=""
          // tickMargin={15}
          tick={{ fill: "#fff", fontSize: "12px", dy: -25 }}
        />
        <YAxis hide={true} domain={[-15, "dataMax + 10"]} />
        <Tooltip
          content={<CustomTooltip />}
          position={{ y: 30 }}
          cursor={{
            stroke: "grey",
            strokeWidth: 25,
            opacity: 0.3,
          }}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          dot={false}
          activeDot={{ r: 5, fill: "#fff" }}
        />
        <Legend verticalAlign="top" content={legendContent} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartsGraph;
