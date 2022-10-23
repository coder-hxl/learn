import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

import Modal from './Modal'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>

        {/* 将内容挂载到其他元素上 */}
        {createPortal(<h2>Hello World</h2>, document.querySelector('#hxl'))}

        <Modal>
          <h2>你好啊</h2>
          <p>哈哈哈</p>
        </Modal>
      </div>
    )
  }
}

export default App
