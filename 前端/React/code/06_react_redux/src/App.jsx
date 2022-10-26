import React, { PureComponent } from 'react'

import store from './store'

import Add from './pages/Add'
import Sub from './pages/Sub'
import Home from './pages/Home'

import './style.css'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ counter: state.counter })
    })
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>App: {counter}</h2>

        <div className="pages">
          <Add />
          <Sub />
          <Home />
        </div>
      </div>
    )
  }
}

export default App
