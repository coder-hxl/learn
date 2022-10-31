import React, { memo, useMemo, useState } from 'react'

function calcNumTotal(num) {
  console.log('calcNumTotal')

  let total = 0
  for (let i = 0; i <= num; i++) {
    total += i
  }

  return total
}

const Home = memo((props) => {
  console.log('Home被渲染~')

  const { info } = props

  return (
    <div>
      Home {info.name} - {info.age}
    </div>
  )
})

const App = memo(() => {
  const [count, setCount] = useState(1)

  // useCallback(fn, []) == useMemo(() => fn, [])

  // 1.不依赖任何值
  // const total = useMemo(() => {
  //   return calcNumTotal(50)
  // }, [])

  // 2.依赖count
  const total = useMemo(() => {
    return calcNumTotal(count * 2)
  }, [count])

  // 3.优化: 给子组件传递数据
  const info = useMemo(() => ({ name: 'hxl', age: 18 }), [])

  return (
    <div>
      <h2>总数: {total}</h2>
      <h2>计算: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>

      <Home info={info} />
    </div>
  )
})

export default App
