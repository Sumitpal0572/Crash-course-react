import React from "react";

const Counter = React.memo(({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
});

export default Counter;
