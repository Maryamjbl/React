import { useState } from "react";
function Counter() {
  let [counter, setCounter] = useState(0);
  let incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-danger">Counter App</h2>
      <div className="p-3 mb-4">
        <button className="btn btn-warning mx-3" onClick={incrementCounter}>
          ➕
        </button>
        <button className="btn btn-primary mx-3" onClick={decrementCounter}>
          ➖
        </button>
      </div>
      <h3 className="text-info">
        Counter : <span className="badge text-bg-success">{counter}</span>
      </h3>
    </div>
  );
}
export default Counter;
