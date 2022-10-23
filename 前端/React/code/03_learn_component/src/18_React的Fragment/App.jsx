import React, { PureComponent, Fragment } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      tag: ['JS', 'Vue.JS', 'React.JS']
    }
  }

  render() {
    const { tag } = this.state

    return (
      // 1.Fragment的使用
      // <Fragment>
      //   <div>App</div>
      //   <h2>你好</h2>
      // </Fragment>

      // 2.Fragment简写
      <>
        <div>App</div>
        <h2>你好</h2>

        <div>
          {tag.map((item) => {
            return (
              // 需要使用属性时则不能简写
              <Fragment key={item}>
                <div>{item}</div>
                <hr />
              </Fragment>
            )
          })}
        </div>
      </>
    )
  }
}

export default App
