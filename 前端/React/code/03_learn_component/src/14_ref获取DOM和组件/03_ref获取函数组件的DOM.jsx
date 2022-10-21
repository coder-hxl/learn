import React, { PureComponent, createRef, forwardRef } from 'react'

const HelloWolrd = forwardRef(function (props, ref) {
  return (
    <div>
      <h2 ref={ref}>HelloWorld</h2>
    </div>
  )
})

export class App extends PureComponent {
  constructor() {
    super()

    this.componentRef = createRef()
  }

  getComponent() {
    console.log(this.componentRef.current)
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
