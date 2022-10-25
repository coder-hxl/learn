import React, { PureComponent } from 'react'
import classNames from 'classnames'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      isAAA: true,
      isBBB: false
    }
  }

  render() {
    const { isAAA, isBBB } = this.state

    return (
      <div>
        <h2>App</h2>
        <h2 className={classNames(['title', { aaa: isAAA }])}>哈哈哈</h2>
        <h2 className={classNames(['title', { bbb: isBBB }])}>嘿嘿嘿</h2>
      </div>
    )
  }
}

export default App
