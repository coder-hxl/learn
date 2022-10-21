import React, { Component } from 'react'
import { flushSync } from 'react-dom'

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
    // React18之前, 像 setTimeout 回调函数里的 setState 是同步
    // React18之后, 像 setTimeout 回调函数里的 setState 是异步
    // flushSync可以将 setState 变成同步
    setTimeout(() => {
      flushSync(() => {
        this.setState({ counter: this.state.counter + 1 })
      })
      console.log(this.state.counter)
    }, 0)
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
