import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return <button onClick={incrementCounter}>Count {count}</button>;
};

export default Counter;
