import React, { memo, useState } from 'react'

const CounterHook = memo(() => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h2>CounterHook {counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+</button>
      <button onClick={(e) => setCounter(counter - 1)}>-</button>
    </div>
  )
})

export default CounterHook
