import React from 'react'

import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      message: 'Hello Scaffold'
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <HelloWorld />
      </div>
    )
  }
}

export default App
