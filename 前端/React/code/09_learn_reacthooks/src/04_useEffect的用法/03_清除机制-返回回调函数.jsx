import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    // 当前回调会在组件渲染完成, 会自动执行
    console.log('监听redux中数据变化')

    // 返回值: 回调函数 => 会在组件重新渲染或组件被卸载前回调
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
