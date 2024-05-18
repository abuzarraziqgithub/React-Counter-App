import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const styling = { margin: "6px", padding: "5px" };
  function incrementHandler() {
    setCounter(++counter);
  }

  function decrementHandler() {
    if (counter > 0) setCounter(--counter);
    else alert("zero is the limit");
  }

  function resetHandler() {
    setCounter(0);
  }
  return (
    <>
      <h1 style={{ color: "crimson" }}>{counter}</h1>
      <button onClick={resetHandler} style={styling}>
        Reset
      </button>
      <button onClick={incrementHandler} style={styling}>
        Increment
      </button>
      <button onClick={decrementHandler} style={styling}>
        Decrement
      </button>
    </>
  );
}

export default App;
