import React from 'react'
import UserProfile from 'modules/User/UserProfile/UserProfile'
import { mockUser } from 'data/user'

const UserProfilePage = () => {
  return <UserProfile user={mockUser} />
}

export default UserProfilePage
