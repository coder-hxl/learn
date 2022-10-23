import React, { PureComponent } from 'react'

export class Profile extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount')
  }

  render() {
    console.log('Profile render')

    return <div>Profile</div>
  }
}

export default Profile
