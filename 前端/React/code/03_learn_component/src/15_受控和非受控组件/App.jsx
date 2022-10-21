import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      nickname: 'coderhxl'
    }
  }

  inputChange(e) {
    console.log(e.target.value)
    this.setState({ nickname: e.target.value })
  }

  render() {
    const { nickname } = this.state

    return (
      <div>
        {/* 受控组件 */}
        <input
          type="text"
          value={nickname}
          onChange={(e) => this.inputChange(e)}
        />
        {/* 非受控组件 */}
        <input type="text" />
        <h3>nickname: {nickname}</h3>
      </div>
    )
  }
}

export default App
