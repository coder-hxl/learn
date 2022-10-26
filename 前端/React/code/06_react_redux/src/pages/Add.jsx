import React, { PureComponent } from 'react'

import store from '../store'
import { addNumberAction } from '../store/actionCreators'

export class Add extends PureComponent {
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
        <h2>Add: {counter}</h2>
        <button onClick={() => store.dispatch(addNumberAction(1))}>+1</button>
        <button onClick={() => store.dispatch(addNumberAction(5))}>+5</button>
        <button onClick={() => store.dispatch(addNumberAction(10))}>+10</button>
      </div>
    )
  }
}

export default Add
