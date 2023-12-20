import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecrementCounter, IncrementCounter, ResetCounter } from "../services/actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
const handleIncrement = () => {
    dispatch(IncrementCounter())
}
const handleDecrement = () => {
    dispatch(DecrementCounter())
}
const handleReset = () => {
    dispatch(ResetCounter())
}



  return (
    <div>
      <h2>Counter App</h2>

      <h3>Count : {count}</h3>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>

    </div>
  );
};

export default Counter;
