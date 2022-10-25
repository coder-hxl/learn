import React, { PureComponent } from 'react'

import Home from './Home'

import { AppWrapper, ContextWrapper } from './style'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      fontSize: 20,
      color: 'red'
    }
  }

  render() {
    const { fontSize, color } = this.state

    return (
      <AppWrapper>
        <div className="section">
          <h2 className="title">Title</h2>
          <ContextWrapper color={color} fontSize={fontSize}>
            Context 哈哈哈哈
          </ContextWrapper>
          <button
            className="btn"
            onClick={() => this.setState({ fontSize: fontSize + 2 })}
          >
            内容字体变大
          </button>
        </div>

        <Home />
      </AppWrapper>
    )
  }
}

export default App
