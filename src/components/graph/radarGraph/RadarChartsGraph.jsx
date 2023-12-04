import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const RadarChartsGraph = ({ data }) => {
  const radar1 = data.USER_PERFORMANCE[0]; // PREMIER USER
  // const radar2 = data.USER_PERFORMANCE[1].data; // DEUXIEME USER

  // const test = data.USER_PERFORMANCE[0].kind;
  // const myArray = Object.values(test);
  // console.log(test);

  // const element = data.USER_PERFORMANCE.filter((item) => item.kind);
  // console.log(element[0].kind);
  // const exemple1 = radar1.data;
  // const result = exemple1.filter((element) => element.kind === test);
  // console.log(result);

  // const tableau = [
  //   { nom: "objet 1", valeur: 10 },
  //   { nom: "objet 2", valeur: 20 },
  //   { nom: "objet 3", valeur: 30 },
  //   { nom: "objet 4", valeur: 40 },
  // ];
  // const objet = { nom: "objet 2", valeur: 20 };

  // const resultat = tableau.filter((element) => element.valeur === objet.valeur);
  // console.log(resultat);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={radar1.data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="myArray"
          style={{ fontSize: "0.4rem", color: "#FFF" }}
          tickMargin={0}
          tick={{ margin: 0 }}
        />
        <Radar dataKey="value" fill="rgba(255, 1, 1, 0.70)" />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartsGraph;
