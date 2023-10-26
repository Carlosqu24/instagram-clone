import React from 'react'

interface User {
  id: string
  userName: string
  displayName: string
  biography: string
}

interface UserProfileProps {
  user: User
}

const UserInformation = ({ user }: UserProfileProps) => {
  return (
    <div className="flex mb-[44px]">
      <img
        src="../../../public/profile-image.jpg"
        alt=""
        className="mr-[50px] rounded-full"
      />

      <div>
        <div className="mb-[20px]">
          <span className="mr-[20px] text-[18px]">{user.userName}</span>
          <button className="mr-[8px] px-[16px] py-[3px] bg-gray-300 rounded-[8px]">
            Edit profile
          </button>
          <button className="mr-[12px] px-[16px] py-[3px] bg-gray-300 rounded-[8px]">
            View archive
          </button>
          <button>Settings</button>
        </div>
        <div className="mb-[20px]">
          <span className="mr-[40px] text-[16px]">66 posts</span>
          <span className="mr-[40px] text-[16px]">233 followers</span>
          <span>564 following</span>
        </div>
        <p className="mb-[6px]">{user.displayName}</p>
        <p>{user.biography}</p>
      </div>
    </div>
  )
}

export default UserInformation
