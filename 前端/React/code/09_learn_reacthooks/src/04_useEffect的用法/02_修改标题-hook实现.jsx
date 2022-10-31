import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    // 当前回调会在组件渲染完成, 会自动执行
    document.title = counter
  })

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App
