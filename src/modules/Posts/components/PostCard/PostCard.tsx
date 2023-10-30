import { Post } from 'models/post'
import React from 'react'

interface PostCardProps {
  post: Post
}

const postCardClassNames = {
  article: `card mb-9 w-[100%] sm:w-[470px] md:w-[470px] xl:w-[470px]`,
  cardHeader: `card-header flex justify-between mb-[12px] px-[16px] pt-[12px] sm:px-[0px] sm:pt-[0px] md:px-[0px] md:pt-[0px] lg:px-[0px] lg:pt-[0px] xl:px-[0px] xl:pt-[0px]`,
  cardHeaderUserInformation: `flex justify-between items-center`,
  cardHeaderUserInformationProfileImage: `rounded-full w-[45px] h-[45px]`,
  cardHeaderUserInformationUsername: `ml-3 font-bold`,
  cardHeaderUserInformationTimeAgo: `ml-2`,

  cardPosterImage: `card-img-top 
  w-[100%]
  sm:w-[470px]
  md:w-[470px]
  xl:w-[470px] 
  h-[470px] 
  object-cover`,
  
  cardBody: `card-body pl-[16px] pr-[16px] sm:pl-[0px] sm:pr-[0px] md:pl-[0px] md:pr-[0px] lg:pl-[0px] lg:pr-[0px] xl:pl-[0px] xl:pr-[0px]`,
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

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className={postCardClassNames.article}>
      <div className={postCardClassNames.cardHeader}>
        <div className={postCardClassNames.cardHeaderUserInformation}>
          <img
            className={postCardClassNames.cardHeaderUserInformationProfileImage}
            src={post.profileImageUrl}
            alt=""
          />
          <span className={postCardClassNames.cardHeaderUserInformationUsername}>{post.username}</span>
          <span className={postCardClassNames.cardHeaderUserInformationTimeAgo}>5h</span>
        </div>
        <div>...</div>
      </div>
      <img
        src={post.imageURL}
        className={postCardClassNames.cardPosterImage}
        alt="..."
      />
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
          <p className={postCardClassNames.cardBodyTotalLikes}>{post.totalLikes} likes</p>
          <span className={postCardClassNames.cardBodyUsername}>{post.username}</span>
          <span className={postCardClassNames.cardBodyDescription}>
            {post.description.length > 75
              ? `${post.description.slice(0, 75)}...`
              : post.description}
          </span>
          <p className={postCardClassNames.cardBodySeeTranslation}>See translation</p>
        </div>

        <div className={postCardClassNames.cardFooter}>
          <input
            type="text"
            placeholder="Add a description..."
            className={postCardClassNames.cardFooterInput}
          />
          <span className={postCardClassNames.cardFooterEmoji}>mood</span>
        </div>
      </div>
    </article>
  )
}

export default PostCard
