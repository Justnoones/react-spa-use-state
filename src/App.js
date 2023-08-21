import React from 'react'
import Image from "./assets/logo192.png"

export default function App() {
  return (
    <div>
      {/* 1st way - public folder way */}
      {/* from public */}

      {/* relative path */}
      <img src='/logo192.png' />
      {/* absoulute path */}
      <img src='http://localhost:3000/logo192.png' />

      {/* 2nd way - import */}
      {/* from src */}

      <img src={Image} />
    </div>
  )
}
