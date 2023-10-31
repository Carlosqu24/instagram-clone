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

const userInformationClassNames = {
  userInformationContainer: '',
  profileImage:
    'md:ml-[47.656px] md:mr-[77.656px] mr-[28px] rounded-full object-cover 77 w-[77px] h-[77px] md:w-[150px] md:h-[150px]'
}

const UserInformation = ({ user }: UserProfileProps) => {
  return (
    <div className="flex md:mb-[44px] m-[16px]">
      <img
        src="../../../public/profile-image.jpg"
        alt=""
        className={userInformationClassNames.profileImage}
      />

      <div>
        <div className="mb-[20px] flex flex-wrap items-center">
          <span className="mr-[20px] text-[18px] w-[100%] md:w-[auto] mb-[12px] md:mb-[0]">
            {user.userName}
          </span>
          <button className="mr-[8px] px-[16px] py-[3px] bg-[#262626] rounded-[8px] text-[14px]">
            Edit profile
          </button>
          <button className="mr-[12px] px-[16px] py-[3px] bg-[#262626] rounded-[8px] text-[14px]">
            View archive
          </button>
          <span className="material-icons">settings</span>
        </div>
        <div className="mb-[20px]">
          <span className="mr-[40px] text-[16px] hidden md:inline">
            66 posts
          </span>
          <span className="mr-[40px] text-[16px] hidden md:inline">
            233 followers
          </span>
          <span className="text-[16px] hidden md:inline">564 following</span>
        </div>
        <p className="mb-[6px]">{user.displayName}</p>
        <p>{user.biography}</p>
      </div>
    </div>
  )
}

export default UserInformation
