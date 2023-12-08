// import data from "../../mocks/dataMock";
// const userPerformance = data.USER_PERFORMANCE;
/**
 * Format userPerformance' data for RadarChartGraph component
 * dataPerformanceFormat
 * @param {array} array
 * @returns {object} activity, data(value, kind)
 */

const dataPerformanceFormat = (array) =>
  // Add a property 'activity' for each kind of object in array.
  // & reverse the order of kind for respect the design mock-up.
  array.map((data) => {
    switch (data.kind) {
      case 1:
        return { activity: "Cardio-nara", ...data };
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

export default dataPerformanceFormat;
