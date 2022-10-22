import React, { PureComponent } from 'react'

// 定义高阶组件
function hoc(OriginComponent) {
  // 类组件
  // return class extends PureComponent {
  //   render() {
  //     return <OriginComponent {...this.props} />
  //   }
  // }

  // 函数组件
  return function (props) {
    return <OriginComponent message="哈哈哈" {...props} />
  }
}

function HelloWorld(props) {
  return <h2>Hello Wolrd - {props.message}</h2>
}

const HelloWorldHOC = hoc(HelloWorld)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <HelloWorldHOC />
      </div>
    )
  }
}

export default App
