import "./App.css";
import { useSelector, useDispatch } from "react-redux";
//import { petIncrement, petDecrement } from "./actions/index";
import { decrement, increment } from "./counterSlice";
// store: is the global state
// action: defines what to do
// reducer:  describes how an action changes from one state to another
// dispatch: performs action to the reducer

function App() {
  //const petCounter = useSelector((state) => state.petCounter);
  //const petFavorite = useSelector((state) => state.petFavorite);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Welcome to React-Redux App</h1>
      <button onClick={() => dispatch(increment())}>Add pets</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Remove pets</button>
    </div>
  );
}

export default App;
