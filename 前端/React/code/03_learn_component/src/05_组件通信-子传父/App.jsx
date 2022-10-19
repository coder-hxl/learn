import React, { Component } from 'react'

import AddCounter from './AddCounter'
import SubCounter from './SubCounter'

class App extends Component {
  constructor() {
    super()

    this.state = {
      counter: 100
    }
  }

  changeCounter(num) {
    this.setState({
      counter: this.state.counter + num
    })
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>{counter}</h2>
        <AddCounter addClick={(num) => this.changeCounter(num)} />
        <SubCounter subClick={(num) => this.changeCounter(num)} />
      </div>
    )
  }
}

export default App
