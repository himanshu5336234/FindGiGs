export const getRateText = (value) => {
  if (value === 0) {
    return "Budget";
  } else if (value === 1) {
    return "Rate / Hours";
  } else if (value === 2) {
    return "Rate / month";
  }
};

export const getBudgetDurationText = (value) => {
  if (value === 1) {
    return "Duration";
  } else if (value === 2) {
    return "Number of Hours";
  } else if (value === 3) {
    return "Number of month";
  }
};
