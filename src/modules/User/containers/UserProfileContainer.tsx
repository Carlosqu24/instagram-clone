import React from 'react'
import UserProfilePresentation from '../presentations/UserProfilePresentation/UserProfilePresentation'
import { mockUser } from 'data/user'
import { mockUserPostsList } from 'data/posts'
import { useNavigate } from 'react-router-dom'

const UserProfileContainer = () => {
  const navigate = useNavigate()

  const onPostCardClick = () => {
    navigate('/profile/posts/' + crypto.randomUUID())
  }

  return (
    <UserProfilePresentation
      user={mockUser}
      userPostsList={mockUserPostsList}
      onPostCardClick={onPostCardClick}
    />
  )
}

export default UserProfileContainer
