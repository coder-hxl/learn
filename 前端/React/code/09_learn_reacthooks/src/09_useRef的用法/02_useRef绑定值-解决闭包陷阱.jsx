import React, { memo, useCallback, useRef, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  const countRef = useRef()
  countRef.current = count
  // 使用Ref解决闭包陷阱
  const increment = useCallback(() => {
    setCount(countRef.current + 1)
  }, [])

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={increment}>+1</button>
    </div>
  )
})

export default App
