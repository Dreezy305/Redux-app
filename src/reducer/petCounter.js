const petCounter = (state = 0, action) => {
  switch (action.type) {
    case "PET_INCREASED":
      return state + 1;
    case "PET_DECREASED":
      return state - 1;
    default:
      return state;
  }
};
