import React, { Component } from 'react'

import NavBar from './nav-bar'
import NavBarV2 from './nav-bar-v2'

export class App extends Component {
  render() {
    return (
      <div>
        {/* 1.通过children */}
        <NavBar>
          <span>哈哈哈</span>
          <h2>嘿嘿嘿</h2>
          <i>斜体</i>
        </NavBar>

        {/* 2.通过porp */}
        <NavBarV2
          leftSlot={<span>哈哈哈</span>}
          rightSlot={<i>斜体</i>}
          centerSlot={<h2>嘿嘿嘿</h2>}
        />
      </div>
    )
  }
}

export default App
