import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  if (count > 0 && count % 33 === 0) {
    alert(`You have completed ${count} prayers!`);
  }

  return (
    <div className='App-container'>
      <h2>Count: {count}</h2>
      <div className='Btn-wrapper'>
      <button className='count-btn' onClick={incrementCount}>Count</button>
      <button className='reset-btn' onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;