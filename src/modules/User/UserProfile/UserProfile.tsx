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
      className="flex flex-col w-full lg:w-[935px] m-auto"
      // className="my-[60px] mx-[20px]" ProfilePage
    >
      <UserInformation user={user} />

      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap items-center -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
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
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
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
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
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
          <UserPostsGrid />
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="saved"
          role="tabpanel"
          aria-labelledby="saved-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{' '}
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
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
