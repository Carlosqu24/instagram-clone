import React from 'react'
import { Post } from 'models/post'

import { useTranslation } from 'react-i18next'

interface UserPostCardPresentationProps {
  post: Post

  handleCloseModal: Function
}

const postCardClassNames = {
  article: `card mb-9 w-[100%] sm:w-[470px] md:w-[470px] xl:w-[470px]`,
  cardHeader: `card-header flex justify-between mb-[12px] px-[16px] pt-[12px] sm:px-[0px] sm:pt-[0px] md:px-[0px] md:pt-[0px] lg:px-[0px] lg:pt-[0px] xl:px-[0px] xl:pt-[0px]`,
  cardHeaderUserInformation: `flex justify-between items-center`,
  cardHeaderUserInformationProfileImage: `rounded-full w-[45px] h-[45px]`,
  cardHeaderUserInformationUsername: `ml-3 font-bold`,
  cardHeaderUserInformationTimeAgo: `ml-2`,

  cardPosterImage: `card-img-top 
    
    sm:w-[470px]
    md:w-[470px]
    xl:w-[470px] 
    h-[470px] 
    object-cover`,

  cardBody: `card-body pl-[16px] pr-[16px] `,
  cardBodyActions: `flex justify-between items-center pt-3 pb-2`,
  cardBodyActionsLeft: `flex justify-between items-center`,
  cardBodyActionsRight: `material-symbols-outlined ml-1 text-[26px]`,

  cardBodyTotalLikes: `font-bold`,
  cardBodyUsername: `font-bold`,
  cardBodyDescription: `ml-1`,
  cardBodySeeTranslation: `font-bold text-[13px] m-0 my-1`,

  cardFooter: `flex justify-between items-center`,
  cardFooterInput: `hidden sm:block md:block lg:block xl:block outline-none p-0 border-none bg-[#000000]`,
  cardFooterEmoji: `hidden sm:block md:block lg:block xl:block material-symbols-outlined text-[18px]`
}

const UserPostCardPresentation = ({
  post,
  handleCloseModal
}: UserPostCardPresentationProps) => {
  const { t: translator } = useTranslation()

  return (
    <div
      className="fixed bg-[#00000080] left-0 top-0 sm:mt-[23px] w-full sm:h-[100vh]"
      style={{ zIndex: '123123123' }}
    >
      <div className="h-[100%] flex flex-col sm:flex-row max-w-[100%] mb-[10px] sm:mb-[0] sm:mt-[10px] sm:mx-[25px]">
        <div className="h-[50vh] sm:h-auto w-full sm:w-auto sm:max-h-[611px] sm:max-w-[488.8px] sm:ml-auto ">
          <img
            src={post.imageURL}
            className="object-cover w-full h-full"
            alt=""
          />
        </div>

        <div className="h-[50vh] sm:h-auto flex flex-col justify-between sm:block bg-[#000] sm:max-h-[611px] sm:max-w-[500px] sm:min-w-[405px]  w-auto sm:mr-auto">
          <div className=" sm:h-[70.8px] flex justify-between py-[14px] px-[16px]">
            <div className="flex justify-between">
              <img
                src={post.profileImageUrl}
                className="h-full rounded-full h-[32px] w-[32px]"
                alt=""
              />

              <div className="ml-[20px] flex items-start flex-col justify-items-start">
                <h3 className="text-[13px] font-bold">{post.username}</h3>
                <span className="text-[11px]">Playa Bejuco, Puntarenas</span>
              </div>
            </div>

            <span>...</span>
          </div>
          <div className=" sm:h-[381px] flex flex-col items-center justify-center">
            {' '}
            <h1 className="text-[24px] font-bold">
              {translator('userPost.noCommentsYet')}
            </h1>
            <p className="text-[14px]">
              {translator('userPost.startTheConversation')}
            </p>
          </div>

          <div className={postCardClassNames.cardBody}>
            <div className={postCardClassNames.cardBodyActions}>
              <div className={postCardClassNames.cardBodyActionsLeft}>
                <span className="material-symbols-outlined text-[26px]">
                  favorite
                </span>
                <span className="material-symbols-outlined ml-1 text-[26px]">
                  chat_bubble
                </span>
                <span className="material-symbols-outlined ml-1 text-[26px]">
                  send
                </span>
              </div>

              <span className={postCardClassNames.cardBodyActionsRight}>
                bookmarks
              </span>
            </div>
            <div>
              <p className={postCardClassNames.cardBodyTotalLikes}>
                {post.totalLikes} likes
              </p>
              <span className={postCardClassNames.cardBodyUsername}>
                {post.username}
              </span>
              <span className={postCardClassNames.cardBodyDescription}>
                {post.description.length > 75
                  ? `${post.description.slice(0, 75)}...`
                  : post.description}
              </span>
              <p className={postCardClassNames.cardBodySeeTranslation}>
                {translator('userPost.seeTranslation')}
              </p>
            </div>

            <div className={postCardClassNames.cardFooter}>
              <input
                type="text"
                placeholder={translator('userPost.addComment')}
                className={postCardClassNames.cardFooterInput}
              />
              <span className={postCardClassNames.cardFooterEmoji}>mood</span>
            </div>
          </div>
        </div>
      </div>

      <span
        className="fixed top-0 right-0 mr-[20px] mt-[20px]"
        onClick={() => handleCloseModal()}
      >
        X
      </span>
    </div>
  )
}

export default UserPostCardPresentation
