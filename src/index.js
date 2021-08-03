import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NewApp from "./NewApp";
import { createStore } from "redux";
import reducers from "./reducer/index";
import { Provider } from "react-redux";

// store: is the global state
// action: defines what to do
// const petIncrement = () => {
//   return {
//     type: "PET_INCREASED",
//   };
// };

// const petDecrement = () => {
//   return {
//     type: "PET_DECREASE",
//   };
// };
// reducer:  describes how an action changes from one state to another, it checks which action is called and modifies the store based on it
// const petCounter = (state = 0, action) => {
//   switch (action.type) {
//     case "PET_INCREASED":
//       return state + 1;
//     case "PET_DECREASED":
//       return state - 1;
//     default:
//       return state;
//   }
// };
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => console.log(store.getState()));

// dispatch: performs action to the reducer
// store.dispatch(petIncrement());
// store.dispatch(petIncrement());
// store.dispatch(petDecrement());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />,
      <NewApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
