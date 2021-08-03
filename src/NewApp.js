import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { petIncrement, petDecrement } from "./actions/index";

// store: is the global state
// action: defines what to do
// reducer:  describes how an action changes from one state to another
// dispatch: performs action to the reducer

function NewApp() {
  const petCounter = useSelector((state) => state.petCounter);
  const petFavorite = useSelector((state) => state.petFavorite);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>New React-Redux App</h1>
      <button onClick={() => dispatch(petIncrement(2))}>Add pets</button>
      <button onClick={() => dispatch(petDecrement())}>Remove pets</button>
      <h1>Pet Counter {petCounter}</h1>
      <h1>Number of favorite pets so far {petFavorite}</h1>
    </div>
  );
}

export default NewApp;
