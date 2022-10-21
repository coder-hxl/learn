import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.message === this.props.message) {
  //     return false
  //   }

  //   return true
  // }

  render() {
    console.log('Home render')

    const { message } = this.props

    return (
      <div>
        <h2>Home - {message}</h2>
      </div>
    )
  }
}

export default Home
