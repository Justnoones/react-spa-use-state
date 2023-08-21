import React from 'react'
import { useState } from 'react'

export default function App() {
  let [count, setCount] = useState(0);
  let increment = () => {
    // setCount(count + 1); the result will be 1 no matter how many line you write because it's async
    // setCount(count + 1); the result will be 1 no matter how many line you write because it's async
    // setCount(count + 1); the result will be 1 no matter how many line you write because it's async
    // setCount(count + 1); the result will be 1 no matter how many line you write because it's async
    // setCount(count + 1); the result will be 1 no matter how many line you write because it's async
    setCount((prevState) => prevState + 1); // 0 + 1 = 1
    setCount((prevState) => prevState + 1); // 1 + 1 = 2
    setCount((prevState) => prevState + 1); // 2 + 1 = 3
    setCount((prevState) => prevState + 1); // 3 + 1 = 4
    setCount((prevState) => prevState + 1); // 4 + 1 = 5
  }
  return (
      <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    )
}
