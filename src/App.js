import "./App.css";
import { useSelector } from "react-redux";

// store: is the global state
// action: defines what to do
// reducer:  describes how an action changes from one state to another
// dispatch: performs action to the reducer

function App() {
  const petCounter = useSelector((state) => state.petCounter);
  const petFavorite = useSelector((state) => state.petFavorite);

  return (
    <div className="App">
      <h1>Welcome to React-Redux App</h1>
    </div>
  );
}

export default App;
