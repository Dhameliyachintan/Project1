import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0)
    const incerementCounter = () => {
      if(count < 30) {
        setCount (() => count + 1)
    }
  }

    const decrementCounter  = () => {
      if(count > 0) {
        setCount (() => count - 1)
    }
  }
  return (
    <div>
        <button on onClick={() => incerementCounter ()}>+</button>
        <span>{count}</span>
        <button on onClick={() => decrementCounter ()}>-</button>
    </div>
  )
}
