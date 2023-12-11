import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { dataUser } from "../../../utils/modelizeData/userPerfModelize";
// console.log(dataUser);

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

  const user = dataUser(data.USER_AVERAGE_SESSIONS);
  // console.log(user[0]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={user[0]}>
        <XAxis
          tickFormatter={formatXAxis}
          stroke=""
          tickMargin={15}
          tick={{ fill: "#fff", fontSize: "12" }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: "grey",
            strokeWidth: 20,
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
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartsGraph;
