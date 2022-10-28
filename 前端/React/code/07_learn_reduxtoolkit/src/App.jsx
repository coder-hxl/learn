import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Home from './page/Home'
import Profile from './page/Profile'
import About from './page/About'

import './style.css'

export class App extends PureComponent {
  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>App: {counter}</h2>

        <div className="pages">
          <Home />
          <Profile />
          <About />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

export default connect(mapStateToProps)(App)
