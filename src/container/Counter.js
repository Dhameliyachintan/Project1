import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const incerementCounter = () => {
    if (count < 4) {
      setCount(() => count + 1)
    } else {
      alert("hello")
    }

  }

  const decrementCounter = () => {
    if (count > 0) {
      setCount(() => count - 1)
    } else {
      alert("hello")
    }
  }
  return (
    <div>
      <button on onClick={() => incerementCounter()}>+</button>
      <span>{count}</span>
      <button on onClick={() => decrementCounter()}>-</button>
    </div>
  )
}
