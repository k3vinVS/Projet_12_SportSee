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
  // const daysOfWeek = ["", "L", "M", "M", "J", "V", "S", "D", ""];
  // const formatXAxis = (tickItem) => {
  //   return daysOfWeek[tickItem];
  // };
  // const dayBefore = { day: 0, sessionLength: 0 };
  // const dayAfter = { day: 8, sessionLength: 100 };
  // userAverageSessions.unshift(dayBefore);
  // userAverageSessions.push(dayAfter);
  // console.log(userAverageSessions);
  const users = [...userAverageSessions];
  const user = dataAverageSession(users);
  console.log(user);

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
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width="100%"
        data={user}
        // data={userAverageSessions}
        margin={{ left: -10, bottom: -18, right: -10 }}
      >
        <XAxis
          dataKey="letterDay"
          stroke=""
          tick={{ fill: "#fff", fontSize: "12px", dy: -15 }}
          // padding={{ right: -5 }}
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
