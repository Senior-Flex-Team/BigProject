import './App.css';
import CardsContainer from "./components/CardsContainer/CardsContainer";
import {useDispatch, useSelector} from "react-redux";
import {increment, incrementByAmount, RootState} from "./context/store";

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Decrement
      </button>
      <CardsContainer/>
    </div>
  );
}

export default App;
