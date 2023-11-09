import React from 'react'
import UserPostCardPresentation from '../presentations/UserPostCardPresentation/UserPostCardPresentation'

import { mockUserPostsList } from '../../../data/posts'
import { useNavigate, useParams } from 'react-router-dom'

const UserPostCardContainer = () => {
  const { postId } = useParams()

  const navigate = useNavigate()

  const post =
    mockUserPostsList.find((userPost) => userPost.id === postId) ??
    mockUserPostsList[0]

  const handleCloseModal = () => navigate('/profile')

  return (
    <UserPostCardPresentation post={post} handleCloseModal={handleCloseModal} />
  )
}

export default UserPostCardContainer
