import React, { useEffect, useState } from 'react';

const Test = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plus}>Plus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Test;
