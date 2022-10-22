import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

export class App extends PureComponent {
  constructor() {
    super()

    // this.state = {
    //   isLogin: false
    // }
  }

  handleLoginClick() {
    localStorage.setItem('token', 'coderhxl')

    // this.setState({ isLogin: true })

    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <h2>App</h2>
        <button onClick={() => this.handleLoginClick()}>登录</button>
        <Cart />
      </div>
    )
  }
}

export default App
