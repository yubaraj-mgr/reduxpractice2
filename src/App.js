import react from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { decrement, incriment } from "./slices/counterSlice";

function App() {
  const { num } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(num);
  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={() => dispatch(incriment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
