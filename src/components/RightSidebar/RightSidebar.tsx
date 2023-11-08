import React from 'react'
import { useTranslation } from 'react-i18next'

import { mockSuggestedUsersList } from 'data'

const RightSidebar = () => {
  const { t: translator } = useTranslation()

  return (
    <aside className="hidden lg:flex lg:flex-col ml-[64px] w-[319px] h-[518px]">
      <div className="flex h-[44px] justify-between w-full">
        <div className="flex justify-between">
          <img
            className="w-8 h-8 rounded-full"
            src="../../../public/profile-image.jpg"
            alt=""
          />

          <div className="ml-2">
            <h2 className="text-[15px] font-bold">Carlosqu24</h2>
            <p className="text-[15px] text-gray-500">Carlos H Quesada</p>
          </div>
        </div>
        <span className="text-[14px] mt-auto font-bold text-[#1b74e4]">
          {translator('rightSidebar.switch')}
        </span>
      </div>

      <div id="suggested-for-you">
        <div className="flex justify-between mt-[24px] text-[14px]">
          <span className="font-bold text-gray-500">
            {' '}
            {translator('rightSidebar.suggestedsForYou')}
          </span>
          <span className="font-bold">{translator('rightSidebar.seeAll')}</span>
        </div>
        {mockSuggestedUsersList.map((user) => (
          <div className="flex h-[44px] justify-between w-full my-[8px]">
            <div className="flex justify-between">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={user.profileImageURL}
                alt=""
              />
              <div className="ml-2">
                <h2 className="text-[15px] font-bold">{user.username}</h2>
                <p className="text-[12px] text-gray-500">
                  {translator('rightSidebar.suggestedForYou')}
                </p>
              </div>
            </div>
            <span className="text-[14px] text-[#1b74e4] mt-auto font-bold">
              {translator('rightSidebar.follow')}
            </span>
          </div>
        ))}
      </div>

      <div>
        <div className="mb-[16px] text-gray-500">
          <span className="text-[13px]">{translator('footer.about')}</span>
          <span className="text-[13px] ml-[2px]">-</span>
          <span className="text-[13px] ml-[2px]">
            {translator('footer.help')}
          </span>
          <span className="text-[13px] ml-[2px]">-</span>
          <span className="text-[13px] ml-[2px]">
            {translator('footer.press')}
          </span>
          <span className="text-[13px] ml-[2px]">-</span>
          <span className="text-[13px] ml-[2px]">
            {translator('footer.api')}
          </span>
          <span className="text-[13px] ml-[2px]">-</span>
          <span className="text-[13px] ml-[2px]">
            {translator('footer.jobs')}
          </span>
          <span className="text-[13px] ml-[2px]">-</span>
          <span className="text-[13px] ml-[2px]">
            {translator('footer.privacy')}
          </span>
          <span className="text-[13px] ml-[2px]">-</span>
          <span className="text-[13px] ml-[2px]">
            {translator('footer.terms')}
          </span>
          <span className="text-[13px] ml-[2px]">-</span>
          <span className="text-[13px] ml-[2px]">
            {translator('footer.locations')}
          </span>
          <span className="text-[13px] ml-[2px]">-</span>
          <span className="text-[13px] ml-[2px]">
            {translator('footer.language')}
          </span>
          <span className="text-[13px] ml-[2px]">-</span>
          <span className="text-[13px] ml-[2px]">
            {translator('footer.metaVerified')}
          </span>
        </div>

        <span className="text-[13px] text-gray-500">
          ©2023 INSTAGRAM FROM META
        </span>
      </div>
    </aside>
  )
}

export default RightSidebar
