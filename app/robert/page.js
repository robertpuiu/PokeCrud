'use client';
import React, { useState } from 'react';

export default function Robert() {
  // State example: Using useState hook to manage state
  const [count, setCount] = useState(0);

  // Event handler example: Function to handle button click
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>My React Component</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
