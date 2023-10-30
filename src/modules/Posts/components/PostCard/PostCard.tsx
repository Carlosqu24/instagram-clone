import { Post } from 'models/post'
import React from 'react'

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="card mb-9 w-[100%] sm:w-[470px] md:w-[470px] xl:w-[470px]">
      <div className="card-header flex justify-between mb-[12px]">
        <div className="flex justify-between items-center">
          <img
            className="rounded-full w-[45px] h-[45px]"
            src={post.profileImageUrl}
            alt=""
          />
          <span className="ml-3 font-bold">{post.username}</span>
          <span className="ml-2">5h</span>
        </div>
        <div>...</div>
      </div>
      <img
        src={post.imageURL}
        className="
                    card-img-top 
                    w-[100%]
                    sm:w-[470px]
                    md:w-[470px]
                    xl:w-[470px] 
                    h-[470px] 
                    object-cover
                "
        alt="..."
      />
      <div className="card-body pl-[16px] pr-[16px]">
        <div className="flex justify-between items-center pt-3 pb-2">
          <div className="flex justify-between items-center">
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

          <span className="material-symbols-outlined ml-1 text-[26px]">
            bookmarks
          </span>
        </div>
        <div>
          <p className="font-bold">{post.totalLikes} likes</p>
          <span className="font-bold">{post.username}</span>
          <span className="ml-1">
            {post.description.length > 75
              ? `${post.description.slice(0, 75)}...`
              : post.description}
          </span>
          <p className="font-bold text-[13px] m-0 my-1">See translation</p>
        </div>

        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Add a description..."
            className="hidden sm:block md:block lg:block xl:block outline-none p-0 border-none"
          />
          <span className="hidden sm:block md:block lg:block xl:block material-symbols-outlined text-[18px]">mood</span>
        </div>
      </div>
    </article>
  )
}

export default PostCard
