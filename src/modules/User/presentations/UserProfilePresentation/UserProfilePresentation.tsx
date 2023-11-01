import React from 'react'
import UserProfile from 'modules/User/UserProfile/UserProfile'
import { Post } from 'models/post'
import { User } from 'models/user'

interface UserProfilePresentationProps {
  user: User
  userPostsList: Post[]
}

const UserProfilePresentation = ({
  user,
  userPostsList
}: UserProfilePresentationProps) => {
  return <UserProfile user={user} userPostsList={userPostsList} />
}

export default UserProfilePresentation
