import React, { PureComponent } from 'react'

import Home from './Home'
import Recommend from './Recommend'
import Profile from './Profile'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      message: 'Hello Wolrd',
      counter: 0
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // 在 shouldComponentUpdate 确定是否更新, 在值没改变的情况下不用更新
  //   if (
  //     nextState.message === this.state.message &&
  //     nextState.counter === this.state.counter
  //   ) {
  //     return false
  //   }

  //   return true
  // }

  changeText() {
    // this.setState({ message: 'Hello Wolrd' })
    this.setState({ message: '你好, 世界' })
  }

  changeCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    console.log('App render')

    const { message, counter } = this.state

    return (
      <div>
        <h2>
          App- {message} - {counter}
        </h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <button onClick={() => this.changeCounter()}>counter + 1</button>
        <Home message={message} />
        <Recommend counter={counter} />
        <Profile />
      </div>
    )
  }
}

export default App
