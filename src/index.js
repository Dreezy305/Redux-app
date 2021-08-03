import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

// store: is the global state
// action: defines what to do
const petIncrement = () => {
  return {
    type: "PET_INCREASED",
  };
};

const petDecrement = () => {
  return {
    type: "PET_DECREASE",
  };
};
// reducer:  describes how an action changes from one state to another
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

let store = createStore(petCounter);

store.subscribe(() => console.log(store.getState()));
// dispatch: performs action to the reducer
store.dispatch(petIncrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
