import React from 'react'
import UserProfilePresentation from '../presentations/UserProfilePresentation/UserProfilePresentation'
import { mockUser } from 'data/user'
import { mockUserPostsList } from 'data/posts'

const UserProfileContainer = () => {
  return (
    <UserProfilePresentation
      user={mockUser}
      userPostsList={mockUserPostsList}
    />
  )
}

export default UserProfileContainer
