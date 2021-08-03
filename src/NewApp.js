import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  PET_FAVORITE_INCREASED,
  PET_FAVORITE_DECREASED,
} from "./actions/index";

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
      <button onClick={() => dispatch(PET_FAVORITE_INCREASED(2))}>
        Add pets
      </button>
      <button onClick={() => dispatch(PET_FAVORITE_DECREASED(2))}>
        Remove pets
      </button>
      <h1>Pet Counter {petCounter}</h1>
      <h1>Number of favorite pets so far {petFavorite}</h1>
    </div>
  );
}

export default NewApp;
