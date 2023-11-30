import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const LineChartsGraph = ({ data }) => {
  // const data = [
  //   {
  //     name: "Jour 1",
  //     calories: 4000,
  //   },
  //   {
  //     name: "Jour 2",
  //     calories: 3000,
  //   },
  //   {
  //     name: "Jour 3",
  //     calories: 2000,
  //   },
  //   {
  //     name: "Jour 4",
  //     calories: 2780,
  //   },
  //   {
  //     name: "Jour 5",
  //     calories: 1890,
  //   },
  //   {
  //     name: "Jour 6",
  //     calories: 2390,
  //   },
  //   {
  //     name: "Jour 7",
  //     calories: 3490,
  //   },
  // ];

  return (
    <ResponsiveContainer width="100%" height="100%" backgroundColor="red">
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="day" />
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartsGraph;
