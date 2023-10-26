import React from 'react'
import UserInformation from '../components/UserInformation/UserInformation'
import UserPostsGrid from '../components/UserPostsGrid/UserPostsGrid'

interface User {
  id: string
  userName: string
  displayName: string
  biography: string
}

interface UserProfileProps {
  user: User
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div
      className="flex flex-col"
      // className="my-[60px] mx-[20px]" ProfilePage
    >
      <UserInformation user={user} />
      <UserPostsGrid />
    </div>
  )
}

export default UserProfile
