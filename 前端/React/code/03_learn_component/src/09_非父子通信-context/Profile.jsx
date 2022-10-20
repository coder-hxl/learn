import React, { Component } from 'react'

import themContext from './context/them-context'

export class Profile extends Component {
  render() {
    const context = this.context

    console.log(context)

    return <div>Profile</div>
  }
}

Profile.contextType = themContext

export default Profile
