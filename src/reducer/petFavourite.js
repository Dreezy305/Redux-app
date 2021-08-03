const petFavourite = (state = 10, action) => {
  switch (action.type) {
    case "PET_FAVORITE_INCREASED":
      return state + 1;
    case "PET_FAVORITE_DECREASED":
      return state - 1;
    default:
      return state;
  }
};

export default petFavourite;
