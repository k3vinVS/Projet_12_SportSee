// import data from "../../mocks/dataMock";
/**
 * Format userPerformance' data for RadarChartGraph component
 * dataPerformanceFormat
 * @param {array} array
 * @returns {object} activity, data(value, kind)
 */

export const dataPerformanceFormat = (array) =>
  // Add a property 'activity' for each kind of object in array.
  // & reverse the order of kind for respect the design mock-up.
  array.map((data) => {
    switch (data.kind) {
      case 1:
        return { activity: "Cardio", ...data };
      case 2:
        return { activity: "Energie", ...data };
      case 3:
        return { activity: "Endurance", ...data };
      case 4:
        return { activity: "Force", ...data };
      case 5:
        return { activity: "Vitesse", ...data };
      case 6:
        return { activity: "Intensité", ...data };
      default:
        return { ...data };
    }
  });

// LINECHARTSGRAPH MOKED DATA -----
export const dataUser = (array) =>
  // Return seulement session?
  array.map((data) => {
    if (data.sessions) {
      return [...data.sessions];
    } else {
      return console.log("test non ok");
    }
    // console.log(data.sessions);
    // switch (data.sessions) {
    //   case 0:
    //     return console.log("test average");
    //   default:
    //     return console.log("test non ok");
    // }
  });
