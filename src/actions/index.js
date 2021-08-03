export const petIncrement = (number) => {
  return {
    type: "PET_INCREASED",
    payload: number,
  };
};

export const petDecrement = () => {
  return {
    type: "PET_DECREASE",
  };
};

export const PET_FAVORITE_INCREASED = () => {
  return {
    type: "PET_FAVORITE_INCREASED",
  };
};

export const PET_FAVORITE_DECREASED = () => {
  return {
    type: "PET_FAVORITE_DECREASED",
  };
};
