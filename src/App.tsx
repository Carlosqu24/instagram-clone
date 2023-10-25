import React from 'react'
import Sidebar from 'components/Sidebar/Sidebar'
import PostsList from 'modules/Posts/PostsList/PostsList'

const suggestedUsersList = [{
  id: 1,
  username: "legion_cre",
  profileImageURL: "../../../public/profile-image.jpg"
}, {
  id: 2,
  username: "_biae_pz",
  profileImageURL: "../../../public/profile-image.jpg"
}, {
  id: 3,
  username: "michitoscr",
  profileImageURL: "../../../public/profile-image.jpg"
}, {
  id: 4,
  username: "geraldgd_d",
  profileImageURL: "../../../public/profile-image.jpg"
}, {
  id: 5,
  username: "amigos_viajeros_tours",
  profileImageURL: "../../../public/profile-image.jpg"
}]

function App() {
  return (
    <>
      <Sidebar />

      <main className='p-4 sm:ml-20 md:ml-20 xl:ml-56 flex m-auto'>
        <PostsList />

        <aside
          className='hidden lg:flex lg:flex-col ml-[64px] w-[319px] h-[518px]'
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
                <p className='text-[15px] text-gray-500'>Carlos H Quesada</p>
              </div>
            </div>
            <span className='text-[15px] mt-auto'>Switch</span>
          </div>

          <div id='suggested-for-you'>
            <div className='flex justify-between mt-[24px] text-[14px]'>
              <span className='font-bold text-gray-500'>Suggested for you</span>
              <span>See all</span>
            </div>

            {
              suggestedUsersList.map(
                user => (
                  <div className="flex h-[44px] justify-between w-full my-[8px]">
                    <div className="flex justify-between">
                      <img
                        className='w-8 h-8 rounded-full'
                        src={user.profileImageURL}
                        alt=""
                      />


                      <div className='ml-2'>
                        <h2 className='text-[15px] font-bold'>{user.username}</h2>
                        <p className='text-[12px] text-gray-500'>Suggested for you</p>
                      </div>
                    </div>
                    <span className='text-[15px] mt-auto'>Follow</span>
                  </div>
                )
              )
            }
          </div>

          <div>
            <div className='mb-[16px] text-gray-500'>
              <span className='text-[13px]'>About</span>
              <span className='text-[13px] ml-[2px]'>-</span>
              <span className='text-[13px] ml-[2px]'>Help</span>
              <span className='text-[13px] ml-[2px]'>-</span>
              <span className='text-[13px] ml-[2px]'>Press</span>
              <span className='text-[13px] ml-[2px]'>-</span>
              <span className='text-[13px] ml-[2px]'>Api</span>
              <span className='text-[13px] ml-[2px]'>-</span>
              <span className='text-[13px] ml-[2px]'>Jobs</span>
              <span className='text-[13px] ml-[2px]'>-</span>
              <span className='text-[13px] ml-[2px]'>Privacy</span>
              <span className='text-[13px] ml-[2px]'>-</span>
              <span className='text-[13px] ml-[2px]'>Terms</span>
              <span className='text-[13px] ml-[2px]'>-</span>
              <span className='text-[13px] ml-[2px]'>Locations</span>
              <span className='text-[13px] ml-[2px]'>-</span>
              <span className='text-[13px] ml-[2px]'>Language</span>
              <span className='text-[13px] ml-[2px]'>-</span>
              <span className='text-[13px] ml-[2px]'>Meta Verified</span>
            </div>

            <span className='text-[13px] text-gray-500'>©2023 INSTAGRAM FROM META</span>
          </div>
        </aside>
      </main>


    </>
  )
}

export default App
