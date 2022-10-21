import { memo } from 'react'

const Profile = memo(function () {
  console.log('Profile render')

  return (
    <div>
      <h2>Profile</h2>
    </div>
  )
})

export default Profile
