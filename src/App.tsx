import React from 'react'
import Sidebar from 'components/Sidebar/Sidebar'
import PostsList from 'modules/Posts/PostsList/PostsList'


function App() {
  return (
    <>
      <Sidebar/>

      <main className='p-4 sm:ml-20 md:ml-20 xl:ml-56 flex m-auto'>
        <PostsList />

        <aside
          className='hidden lg:flex ml-[64px] w-[319px] h-[518px]'
        >
          <div className="flex h-[44px] justify-between w-full">
            <div className="flex justify-between">
              <img 
                className='w-8 h-8 rounded-full' 
                src="../../../public/profile-image.jpg" 
                alt="" 
              />

              
              <div className='ml-2'>
                <h2 className='text-[15px] font-bold'>Username</h2>
                <p className='text-[15px]'>Carlos H Quesada</p>
              </div>
            </div>
            <span className='text-[15px] mt-auto'>Switch</span>
          </div>

          
        </aside>
      </main>

      
    </>
  )
}

export default App
