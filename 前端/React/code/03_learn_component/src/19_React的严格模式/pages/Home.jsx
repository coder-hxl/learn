import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  constructor() {
    super()

    console.log('Home constructor')
  }

  // UNSAFE_componentWillMount() {
  //   console.log('UNSAFE_componentWillMount')
  // }

  componentDidMount() {
    console.log('Home componentDidMount')
  }

  render() {
    console.log('Home render')

    return <div ref="home">Home</div>
  }
}

export default Home
