import React from 'react'

class HelloWorld extends React.Component {
  constructor() {
    super()

    this.state = {
      message: 'Hello World'
    }
  }

  render() {
    return <h2>{this.state.message}</h2>
  }
}

export default HelloWorld
