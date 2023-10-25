import React from 'react'
import Sidebar from 'components/Sidebar/Sidebar'
import PostsList from 'modules/Posts/PostsList/PostsList'


function App() {
  return (
    <>
      <Sidebar/>

      <main className='p-4 sm:ml-20 md:ml-20 xl:ml-56'>
        <h1>Instagram clone</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, saepe perferendis molestiae placeat asperiores, iusto nisi mollitia quas eligendi tenetur quo amet. Eveniet quasi totam adipisci deserunt nam neque dolores!</p>
      
        <hr />

        <PostsList />
      </main>
    </>
  )
}

export default App
