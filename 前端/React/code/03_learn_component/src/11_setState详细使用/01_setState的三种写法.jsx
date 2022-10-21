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
    // 传进去的 对象或函数返回的对象 会在其内部会与state进行对象合并

    // 1.传入对象
    // this.setState({ message: '你好 世界' })

    // 2.传入函数
    // - 在里面编写与之相关的逻辑处理
    // - 回调会传入更新前的state和props
    this.setState((prevState, prevProps) => {
      console.log('prevState', prevState)
      return { message: '你好 世界' }
    })

    // 3.第二个参数是回调函数, 等更新完后会执行
    // - 数据合并好后, 执行对结果的处理逻辑
    // this.setState({ message: '你好世界' }, () => {
    //   console.log('callback', this.state.message)
    // })

    console.log('-----', this.state.message)
  }

  render() {
    const { message } = this.state

    return (
      <div>
        <h2>{message}</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
      </div>
    )
  }
}

export default App
