export const dataPerformanceFormat = (array) =>
  array.reverse().map((data) => {
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

export const dataAverageSession = (array) => {
  const dayBefore = { day: 0, sessionLength: 0 };
  const dayAfter = {
    day: 8,
    sessionLength: 100,
  };
  array.unshift(dayBefore);
  array.push(dayAfter);

  const averageArray = array.map((data) => {
    switch (data.day) {
      case 0:
        return { letterDay: "", ...data };
      case 1:
        return { letterDay: "L", ...data };
      case 2:
        return { letterDay: "M", ...data };
      case 3:
        return { letterDay: "M", ...data };
      case 4:
        return { letterDay: "J", ...data };
      case 5:
        return { letterDay: "V", ...data };
      case 6:
        return { letterDay: "S", ...data };
      case 7:
        return { letterDay: "D", ...data };
      case 8:
        return { letterDay: "", ...data };

      default:
        return { ...data };
    }
  });
  return averageArray;
};
