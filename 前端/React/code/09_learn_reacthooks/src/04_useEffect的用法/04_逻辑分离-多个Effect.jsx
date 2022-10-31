import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('修改title')
  })

  useEffect(() => {
    console.log('监听redux中数据变化')

    return () => {
      console.log('取消监听redux中数据变化')
    }
  })

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App
