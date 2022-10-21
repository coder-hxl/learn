import React, { PureComponent } from 'react'

export class Recommend extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.counter === this.props.counter) {
  //     return false
  //   }

  //   return true
  // }

  render() {
    console.log('recommend render')

    const { counter } = this.props

    return (
      <div>
        <h2>Recommend - {counter}</h2>
      </div>
    )
  }
}

export default Recommend
