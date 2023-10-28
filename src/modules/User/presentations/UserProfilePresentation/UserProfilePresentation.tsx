import React from 'react'
import UserProfile from 'modules/User/UserProfile/UserProfile'
import { mockUser } from 'data/user'

const UserProfilePresentation = () => {
  return <UserProfile user={mockUser} />
}

export default UserProfilePresentation
