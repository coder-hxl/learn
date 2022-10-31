import React, { memo, useCallback, useRef, useState } from 'react'

// useCallback优化内容:
// 当需要传函数给子组件, 使用useCallback优化好后传给子组件, 可以避免不必要的渲染

const Home = memo((props) => {
  console.log('Home被渲染~')
  const { increment } = props
  return <button onClick={increment}>+1</button>
})

const App = memo(() => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello World')

  // 闭包陷阱
  // const increment = useCallback(() => {
  //   console.log('increment')
  //   setCount(count + 1)
  // }, [count])

  const countRef = useRef()
  countRef.current = count
  const increment = useCallback(() => {
    console.log('increment')
    setCount(countRef.current + 1)
  }, [])

  // function increment() {
  //   setCount(count + 1)
  // }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
      <Home increment={increment} />

      <h2>{message}</h2>
      <button onClick={(e) => setMessage('你好 世界')}>修改文本</button>
    </div>
  )
})

export default App
