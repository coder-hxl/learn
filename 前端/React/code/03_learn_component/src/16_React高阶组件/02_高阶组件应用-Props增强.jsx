import React, { PureComponent } from 'react'
import enhancedUserInfo from './hoc/enhanced_porps'

const Home = enhancedUserInfo(function (props) {
  return (
    <h2>
      Home - {props.name} - {props.age}
    </h2>
  )
})

const Profile = enhancedUserInfo(function (props) {
  return (
    <h2>
      Profile - {props.name} - {props.age}
    </h2>
  )
})

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <Home />
        <Profile />
      </div>
    )
  }
}

export default App
