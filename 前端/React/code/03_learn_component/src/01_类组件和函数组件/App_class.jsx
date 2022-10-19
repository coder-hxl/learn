import React from 'react'

// 1.类组件
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      message: 'Hello World'
    }
  }

  render() {
    const { message } = this.state

    // 1.React元素: 编写jsx会被编译成React.createElement
    // return <h2>{message}</h2>

    // 2.组件/Fragments/数组
    // return ['a', 'b', 'c']
    // return [<h1>哈哈哈</h1>, <h1>嘿嘿嘿</h1>, <h1>呵呵呵</h1>]

    // 3.字符串/数字
    // return '哈哈哈'

    return true
  }
}

export default App
