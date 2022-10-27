import React, { PureComponent } from 'react'

import store from '../store'
import { subNumberAction } from '../store/counter'

export class Sub extends PureComponent {
  constructor() {
    super()

    this.state = {
      counter: store.getState().counter.counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ counter: state.counter.counter })
    })
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>Sub: {counter}</h2>
        <button onClick={() => store.dispatch(subNumberAction(1))}>-1</button>
        <button onClick={() => store.dispatch(subNumberAction(5))}>-5</button>
        <button onClick={() => store.dispatch(subNumberAction(10))}>-10</button>
      </div>
    )
  }
}

export default Sub
