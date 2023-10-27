import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Sidebar from 'components/Sidebar/Sidebar'
import PostsList from 'modules/Posts/PostsList/PostsList'
import RightSidebar from 'components/RightSidebar/RightSidebar'
import UserProfile from 'modules/User/UserProfile/UserProfile'
import 'flowbite'
import { router } from 'routes'

function App() {
  return (
    <>
      <Sidebar />

      <main className="p-4 sm:ml-20 md:ml-20 xl:ml-56 flex m-auto">
        {/* <PostsList /> */}

        <RouterProvider router={router} />

        {/* <RightSidebar /> */}
      </main>
    </>
  )
}

export default App
