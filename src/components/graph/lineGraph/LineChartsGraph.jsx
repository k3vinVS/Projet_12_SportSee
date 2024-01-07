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
import { dataAverageSession } from "../../../utils/modelizeData/userPerfModelize";

const LineChartsGraph = ({ userAverageSessions }) => {
  // DUPLICATE ARRAY BEFORE USE & FUNCTION TO SORT INFORMATION FROM DATA BEFORE USE -----
  const users = [...userAverageSessions];
  const user = dataAverageSession(users);

  // MODIFY LEGEND'S DISPLAY -----
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };
  const legendContent = () => {
    return <span className="legend-container">Durée moyenne des sessions</span>;
  };

  return (
    <ResponsiveContainer width="100%" height="103%">
      <LineChart data={user} margin={{ left: -10, bottom: -28, right: -10 }}>
        <XAxis
          dataKey="letterDay"
          stroke=""
          tick={{ fill: "#fff", fontSize: "12px", dy: -28 }}
        />
        <YAxis hide={true} padding={{ bottom: 30 }} />
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
          activeDot={{ r: 3, fill: "#fff" }}
        />
        <Legend verticalAlign="top" content={legendContent} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartsGraph;
