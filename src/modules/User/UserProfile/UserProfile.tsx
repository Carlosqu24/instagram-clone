import React from 'react'
import UserInformation from '../components/UserInformation/UserInformation'
import UserPostsGrid from '../components/UserPostsGrid/UserPostsGrid'
import { User } from 'models/user'

interface UserProfileProps {
  user: User
  userPostsList: any[]

  onPostCardClick: () => void
}

const UserProfile = ({
  user,
  userPostsList,
  onPostCardClick
}: UserProfileProps) => {
  return (
    <div
      className="flex flex-col w-full lg:w-[935px] m-auto"
      // className="my-[60px] mx-[20px]" ProfilePage
    >
      <UserInformation user={user} />

      <div className="mb-4 border-t py-6 border-gray-200 dark:border-gray-700 flex justify-center w-[100%]">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="mr-[60px]" role="presentation ">
            <span className="material-symbols-outlined text-[16px]">
              grid_on
            </span>
            <button
              className="inline-block rounded-t-lg ml-1"
              id="posts-tab"
              data-tabs-target="#posts"
              type="button"
              role="tab"
              aria-controls="posts"
              aria-selected="false"
            >
              Posts
            </button>
          </li>
          <li className="mr-[60px]" role="presentation">
            <span className="material-symbols-outlined text-[16px]">
              bookmark
            </span>
            <button
              className="inline-block rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ml-1"
              id="saved-tab"
              data-tabs-target="#saved"
              type="button"
              role="tab"
              aria-controls="saved"
              aria-selected="false"
            >
              Saved
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <span className="material-symbols-outlined text-[16px]">
              person_pin
            </span>
            <button
              className="inline-block rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ml-1"
              id="tagged-tab"
              data-tabs-target="#tagged"
              type="button"
              role="tab"
              aria-controls="tagged"
              aria-selected="false"
            >
              Tagged
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="posts"
          role="tabpanel"
          aria-labelledby="posts-tab"
        >
          <UserPostsGrid
            userPostsList={userPostsList}
            onPostCardClick={onPostCardClick}
          />
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="saved"
          role="tabpanel"
          aria-labelledby="saved-tab"
        >
          <div className="flex items-center justify-center h-[279px] font-bold text-[30px]">
            <h2>No Photos</h2>
          </div>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="tagged"
          role="tabpanel"
          aria-labelledby="tagged-tab"
        >
          <div className="flex items-center justify-center h-[279px] font-bold text-[30px]">
            <h2>No Photos</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
