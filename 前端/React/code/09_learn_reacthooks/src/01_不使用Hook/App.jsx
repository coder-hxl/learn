import React, { PureComponent } from 'react'

class HelloWorld extends PureComponent {
  constructor() {
    super()

    this.state = {
      message: 'Hello World'
    }
  }

  changeMessage() {
    this.setState({ message: '你好 世界' })
  }

  render() {
    const { message } = this.state

    return (
      <div>
        <h2>{message}</h2>
        <button onClick={(e) => this.changeMessage()}>修改文本</button>
      </div>
    )
  }
}

function HelloWorld2(props) {
  let message = 'Hello World'

  // 函数式组件的缺陷:
  // 1.组件不会被重新渲染: 修改message后, 组件不知道要重新渲染
  // 2.如果页面重新渲染: message还是为Hello World
  // 3.没有类似于生命周期的回调

  function changeMessage() {
    message = '你好 世界'
  }

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={(e) => changeMessage()}>修改文本</button>
    </div>
  )
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorld />
        <hr />
        <HelloWorld2 />
      </div>
    )
  }
}

export default App
