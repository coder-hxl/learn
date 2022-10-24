import React, { PureComponent } from 'react'

import Home from './Home'

import AppStyle from './App.module.css'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={AppStyle.title}>App</h2>
        <div className={AppStyle.context}>App 嘿嘿嘿</div>

        <Home />
      </div>
    )
  }
}

export default App
