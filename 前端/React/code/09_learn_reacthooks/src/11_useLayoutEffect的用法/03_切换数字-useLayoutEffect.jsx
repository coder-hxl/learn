import React, { memo, useLayoutEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(100)

  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random() + 90)
    }
  }, [count])

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={(e) => setCount(0)}>设置为0</button>
    </div>
  )
})

export default App
