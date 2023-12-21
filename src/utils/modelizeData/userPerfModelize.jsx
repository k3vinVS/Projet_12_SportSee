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
