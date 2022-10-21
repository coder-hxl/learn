import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      message: 'Hello Wolrd',
      counter: 0
    }
  }

  changeText() {
    this.setState({ message: '你好 世界' })
    console.log(this.state.message)
  }

  increment() {
    // setState是异步操作可以进行批量处理更新, 处理好后执行render函数

    // this.setState({ counter: this.state.counter + 1 })
    // this.setState({ counter: this.state.counter + 1 })
    // this.setState({ counter: this.state.counter + 1 })

    this.setState((state) => ({ counter: state.counter + 1 }))
    this.setState((state) => ({ counter: state.counter + 1 }))
    this.setState((state) => ({ counter: state.counter + 1 }))
  }

  render() {
    console.log('render')

    const { message, counter } = this.state

    return (
      <div>
        <h2>{message}</h2>
        <button onClick={() => this.changeText()}>修改文本</button>

        <h2>{counter}</h2>
        <button onClick={() => this.increment()}>+</button>
      </div>
    )
  }
}

export default App
