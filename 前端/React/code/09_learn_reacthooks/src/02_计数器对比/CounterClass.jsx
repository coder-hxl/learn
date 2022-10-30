import React, { PureComponent } from 'react'

export class CounterClass extends PureComponent {
  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>CounterClass {counter}</h2>
        <button onClick={(e) => this.increment()}>+</button>
        <button onClick={(e) => this.decrement()}>-</button>
      </div>
    )
  }
}

export default CounterClass
