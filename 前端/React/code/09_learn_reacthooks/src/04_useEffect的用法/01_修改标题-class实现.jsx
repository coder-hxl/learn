import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    document.title = this.state.counter
  }

  componentDidUpdate() {
    document.title = this.state.counter
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>{counter}</h2>
        <button onClick={(e) => this.setState({ counter: counter + 1 })}>
          +1
        </button>
      </div>
    )
  }
}

export default App
