import React, { PureComponent } from 'react'

import Home from './Home'

import './style.css'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">App</h2>
        <div className="context">App 嘿嘿嘿</div>

        <Home />
      </div>
    )
  }
}

export default App
