import React, { memo, useEffect, useLayoutEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect')
  })

  // 在执行页面渲染前执行
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  })

  console.log('render')
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App
