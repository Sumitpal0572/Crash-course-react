import React, { useState, useCallback } from "react";
import Counter from "./Counter";
import Timer from "./Timer";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Increment and Decrement functions using useCallback to memoize
  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  // Timer control functions
  const startTimer = useCallback(() => setIsRunning(true), []);
  const stopTimer = useCallback(() => setIsRunning(false), []);
  const pauseTimer = useCallback(() => setIsRunning(false), []);

  return (
    <div>
      <h1>Parent Component</h1>
      <Counter count={count} increment={increment} decrement={decrement} />
      <Timer
        isRunning={isRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
        pauseTimer={pauseTimer}
      />
    </div>
  );
};

export default ParentComponent;
