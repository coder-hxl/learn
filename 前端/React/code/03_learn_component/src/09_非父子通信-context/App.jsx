import React, { Component } from 'react'

import userContext from './context/user-context'
import themContext from './context/them-context.js'

import Home from './Home'

import Profile from './Profile'

export class App extends Component {
  render() {
    const info = {
      name: 'hxl',
      age: 18
    }

    return (
      <div>
        {/* 第二步: 使用context.provider, value是固定属性 */}
        <userContext.Provider value={{ nickname: 'coderhxl', age: 18 }}>
          <themContext.Provider value={{ color: 'red', fontSize: '16px' }}>
            <Home {...info} />
          </themContext.Provider>
        </userContext.Provider>
        <Profile />
      </div>
    )
  }
}

export default App
