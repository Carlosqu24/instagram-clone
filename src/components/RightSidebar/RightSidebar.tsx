import React from 'react'


const suggestedUsersList = [{
    id: 1,
    username: "legion_cre",
    profileImageURL: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
  }, {
    id: 2,
    username: "_biae_pz",
    profileImageURL: "https://www.reuters.com/resizer/nKNuP7CUMD-waJzzPrITsw0CMcY=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UJULRTTCDFNBTEJAC4Y3SXIKW4.jpg"
  }, {
    id: 3,
    username: "michitoscr",
    profileImageURL: "https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg"
  }, {
    id: 4,
    username: "geraldgd_d",
    profileImageURL: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kushaq/9771/1697178106968/front-left-side-47.jpg?impolicy=resize&imwidth=480"
  }, {
    id: 5,
    username: "amigos_viajeros_tours",
    profileImageURL: "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg"
  }]

const RightSidebar = () => {
  return (
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
                <h2 className='text-[15px] font-bold'>Carlosqu24</h2>
                <p className='text-[15px] text-gray-500'>Carlos H Quesada</p>
              </div>
            </div>
            <span className='text-[14px] mt-auto font-bold text-[#1b74e4]'>Switch</span>
          </div>

          <div id='suggested-for-you'>
            <div className='flex justify-between mt-[24px] text-[14px]'>
              <span className='font-bold text-gray-500'>Suggested for you</span>
              <span className='font-bold'>See all</span>
            </div>
            {
              suggestedUsersList.map(
                user => (
                  <div className="flex h-[44px] justify-between w-full my-[8px]">
                    <div className="flex justify-between">
                      <img
                        className='w-8 h-8 rounded-full object-cover'
                        src={user.profileImageURL}
                        alt=""
                      />
                      <div className='ml-2'>
                        <h2 className='text-[15px] font-bold'>{user.username}</h2>
                        <p className='text-[12px] text-gray-500'>Suggested for you</p>
                      </div>
                    </div>
                    <span className='text-[14px] text-[#1b74e4] mt-auto font-bold'>Follow</span>
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
  )
}

export default RightSidebar