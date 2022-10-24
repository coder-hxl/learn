import React, { PureComponent, createRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import './style.css'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      isShow: true
    }

    this.sectionRef = createRef()
  }

  render() {
    const { isShow } = this.state

    return (
      <div>
        <button onClick={() => this.setState({ isShow: !isShow })}>切换</button>
        {/* <h2>{isShow && '哈哈哈'}</h2> */}

        <CSSTransition
          nodeRef={this.sectionRef}
          in={isShow}
          unmountOnExit
          classNames="hxl"
          appear
          timeout={2000}
          onEnter={() => console.log('执行进入前')}
          onEntering={() => console.log('执行进入后')}
          onEntered={() => console.log('执行进入结束')}
          onExit={() => console.log('执行退出前')}
          onExiting={() => console.log('执行退出后')}
          onExited={() => console.log('执行退出结束')}
        >
          <h2 ref={this.sectionRef}>哈哈哈哈</h2>
        </CSSTransition>
      </div>
    )
  }
}

export default App
