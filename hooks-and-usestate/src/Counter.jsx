//  updater function =  A function passed as an argument to setState() usually
//                      ex. setYear(y => y + 1)
//                      Allow for safe updates based on the previous state
//                      Used with multiple state updates and asynchronous functions
//                      Good practice to use updater functions

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount((c) => c - 1);
      setCount((c) => c - 1);
      setCount((c) => c - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>
        decrement
      </button>
      <button className="counter-button" onClick={reset}>
        reset
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
