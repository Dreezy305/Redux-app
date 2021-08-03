import petCounter from "./petCounter";
import petFavorite from "./petFavourite";
import { combineReducers } from "redux";

const reducers = combineReducers({
  petCounter,
  petFavorite,
});

export default reducers;
