import React, { useState } from 'react'
import Image from "./assets/logo192.png"

export default function App() {
  let [name, setName] = useState("Wai Yan Ye Yint");
  let changeName = () => {
    setName("Aung Aung");
    console.log(name); // Wai Yan Ye Yint
  }
  return (
    <div className='app'>
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}
