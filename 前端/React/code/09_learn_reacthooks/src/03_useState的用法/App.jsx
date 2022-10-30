import React, { memo, useState } from 'react'

// hooks只能在函数的最顶层使用, 普通函数不能使用
// 自定义hooks中, 可以使用react提供的hooks, 但必须以use开头
function useFoo() {
  const [age] = useState(18)

  console.log(age)
}

const App = memo(() => {
  const [message, setMessage] = useState('Hello World')

  function changeMessage() {
    setMessage('你好 世界')
  }

  useFoo()

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  )
})

export default App
