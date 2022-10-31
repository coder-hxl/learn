import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState('Hello World')

  // 参数二: 控制执行回调
  useEffect(() => {
    console.log('修改title')
    document.title = counter
  }, [counter])

  useEffect(() => {
    console.log('监听redux中数据变化')

    return () => {
      console.log('取消监听redux中数据变化')
    }
  }, [])

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <h2>{message}</h2>
      <button onClick={(e) => setMessage('你好 世界')}>修改文本</button>
    </div>
  )
})

export default App
