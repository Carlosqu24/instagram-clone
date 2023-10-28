import UserProfile from 'modules/User/UserProfile/UserProfile'
import React from 'react'

const UserProfilePage = () => {
  return (
    <UserProfile
      user={{
        id: crypto.randomUUID(),
        userName: 'carlos_qu24',
        displayName: 'Carlos H. Quesada',
        biography: 'Web developer | Web designer P.Z. 🌊🌴'
      }}
    />
  )
}

export default UserProfilePage
