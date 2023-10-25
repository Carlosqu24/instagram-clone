import React from 'react'
import Sidebar from 'components/Sidebar/Sidebar'
import PostsList from 'modules/Posts/PostsList/PostsList'


function App() {
  return (
    <>
      <Sidebar/>

      <main className='p-4 sm:ml-20 md:ml-20 xl:ml-56'>
        <PostsList />
      </main>
    </>
  )
}

export default App
