import React, { Component } from 'react'

import Home from './Home'

import eventBus from './utils/event'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      age: 0
    }
  }

  componentDidMount() {
    eventBus.on('prevBanner', (name, age) => {
      console.log('prevBanner', name, age)

      this.setState({ name, age })
    })

    eventBus.on('nextBanner', (value) => {
      console.log('nextBanner', value)
      const { name, age } = value

      this.setState({ name, age })
    })
  }

  render() {
    const { name, age } = this.state

    return (
      <div>
        <h2>
          App Component {name}-{age}
        </h2>
        <Home />
      </div>
    )
  }
}

export default App
