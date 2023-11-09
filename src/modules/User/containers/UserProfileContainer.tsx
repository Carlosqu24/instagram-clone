import React from 'react'
import UserProfilePresentation from '../presentations/UserProfilePresentation/UserProfilePresentation'
import { mockUser } from 'data/user'
import { mockUserPostsList } from 'data/posts'
import { useNavigate } from 'react-router-dom'

const UserProfileContainer = () => {
  const navigate = useNavigate()

  const onPostCardClick = (postId: string) => {
    navigate('/profile/posts/' + postId)
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
