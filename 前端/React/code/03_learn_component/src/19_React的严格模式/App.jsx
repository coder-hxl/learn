import React, { PureComponent, StrictMode } from 'react'

import Home from './pages/Home'
import Profile from './pages/Profile'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>

        <StrictMode>
          <Home></Home>
        </StrictMode>

        <Profile></Profile>
      </div>
    )
  }
}

export default App
