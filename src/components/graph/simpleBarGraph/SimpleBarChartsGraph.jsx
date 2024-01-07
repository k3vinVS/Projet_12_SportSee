import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "../../../styles/poids.css";

const SimpleBarChartsGraph = ({ userActivity }) => {
  // CHANGE DAY'S FORMAT -----
  const formatYAxis = (formatDay) => {
    return formatDay + 1;
  };

  // MODIFY LEGEND'S STYLE -----
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
    <div className="poids-container">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          margin={{ top: 80, right: 35, bottom: 30, left: 35 }}
          data={userActivity}
          barGap={8}
          barCategoryGap="35%"
        >
          <Tooltip content={CustomTooltip} position={{ y: 90 }} />
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{
              position: "absolute",
              top: "5px",
              fontSize: "0.84rem",
              paddingTop: "1.2rem",
            }}
            formatter={(value) => (
              <span style={{ color: "#74798c" }}>{value}</span>
            )}
            iconType="circle"
            iconSize="7"
          />
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            tickLine={false}
            tick={{ fontSize: "0.88rem", fontWeight: 500 }}
            tickFormatter={formatYAxis}
            dy={15}
            stroke="#9B9EAC"
            padding={{ left: -20, right: -20 }}
          />
          <YAxis
            orientation="right"
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax + 1"]}
            allowDecimals={false}
            dx={30}
            stroke="#9B9EAC"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: "0.88rem", fontWeight: 500 }}
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            domain={[0, "dataMax + 50"]}
            hide={true}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            radius={[50, 50, 0, 0]}
            BarSize={10}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            radius={[50, 50, 0, 0]}
            BarSize={10}
            yAxisId="cal"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChartsGraph;
