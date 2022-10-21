import React, { PureComponent, createRef } from 'react'

class HelloWolrd extends PureComponent {
  test() {
    console.log('test')
  }

  render() {
    return (
      <div>
        <h2>HelloWorld</h2>
      </div>
    )
  }
}

export class App extends PureComponent {
  constructor() {
    super()

    this.componentRef = createRef()
  }

  getComponent() {
    console.log(this.componentRef.current)

    this.componentRef.current.test()
  }

  render() {
    return (
      <div>
        <HelloWolrd ref={this.componentRef} />
        <button onClick={(e) => this.getComponent()}>获取Component</button>
      </div>
    )
  }
}

export default App
