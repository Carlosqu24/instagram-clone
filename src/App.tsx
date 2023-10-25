import React from 'react'
import Sidebar from 'components/Sidebar/Sidebar'
import PostsList from 'modules/Posts/PostsList/PostsList'
import RightSidebar from 'components/RightSidebar/RightSidebar'


function App() {
  return (
    <>
      <Sidebar />

      <main className='p-4 sm:ml-20 md:ml-20 xl:ml-56 flex m-auto'>
        <PostsList />

        <RightSidebar />
      </main>


    </>
  )
}

export default App
