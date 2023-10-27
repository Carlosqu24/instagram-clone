import React from 'react'
import Sidebar from 'components/Sidebar/Sidebar'
import PostsList from 'modules/Posts/PostsList/PostsList'
import RightSidebar from 'components/RightSidebar/RightSidebar'
import UserProfile from 'modules/User/UserProfile/UserProfile'
import 'flowbite'

function App() {
  return (
    <>
      <Sidebar />

      <main className="p-4 sm:ml-20 md:ml-20 xl:ml-56 flex m-auto">
        {/* <PostsList /> */}

        <UserProfile
          user={{
            id: crypto.randomUUID(),
            userName: 'carlos_qu24',
            displayName: 'Carlos H. Quesada',
            biography: 'Web developer | Web designer P.Z. 🌊🌴'
          }}
        />

        {/* <RightSidebar /> */}
      </main>
    </>
  )
}

export default App
