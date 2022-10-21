import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      message: 'Hello World'
    }

    this.titleRef = createRef()
    this.titleEl = null
  }

  getNativeDOM() {
    // 1.方式一: 在元素上的ref属性绑定字符串
    // console.log(this.refs.helloWolrd)

    // 2.方式二: 先调用createRef创建一个ref对象, 并绑定给元素的ref属性
    // console.log(this.titleRef.current)

    // 3.方式三: 传入一个函数, 在元素被渲染后会回调, 并将元素传入
    console.log(this.titleEl)
  }

  render() {
    const { message } = this.state

    return (
      <div>
        <h2 ref="helloWolrd">{message}</h2>
        <h2 ref={this.titleRef}>哈哈哈</h2>
        <h2 ref={(elRef) => (this.titleEl = elRef)}>嘿嘿嘿</h2>
        <button onClick={(e) => this.getNativeDOM()}>获取DOM</button>
      </div>
    )
  }
}

export default App
