import React from 'react'
import UserProfile from 'modules/User/UserProfile/UserProfile'
import { Post } from 'models/post'
import { User } from 'models/user'

interface UserProfilePresentationProps {
  user: User
  userPostsList: Post[]

  onPostCardClick: () => void
}

const UserProfilePresentation = ({
  user,
  userPostsList,
  onPostCardClick
}: UserProfilePresentationProps) => {
  return (
    <UserProfile
      user={user}
      userPostsList={userPostsList}
      onPostCardClick={onPostCardClick}
    />
  )
}

export default UserProfilePresentation
