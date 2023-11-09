import { Post } from 'models/post'
import React, { MouseEvent } from 'react'

interface UserPostsGridProps {
  userPostsList: Post[]

  onPostCardClick: (postId: string) => void
}

const UserPostsGrid = ({
  userPostsList,
  onPostCardClick
}: UserPostsGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {userPostsList.map((post) => (
        <div
          className="relative h-[215px] "
          onClick={() => onPostCardClick(`${post.id}`)}
        >
          <div className="bg-[#00000] text-[transparent] absolute w-full h-full flex items-center justify-center z-20 hover:w-full hover:h-full hover:bg-[#343434ad] hover:text-[#fff]">
            <div className="flex items-center">
              <span className="material-icons text-[18px]">favorite</span>
              <span className="z-30 text-[14px] ml-2 font-bold">
                {post.totalLikes}
              </span>
            </div>

            <div className="ml-5 flex items-center">
              <span className="material-icons text-[18px]">chat_bubble</span>
              <span className="z-30 text-[14px] ml-2 font-bold">
                {post.totalComments}
              </span>
            </div>
          </div>
          <img
            src={post.imageURL}
            className="absolute bg-blue-400 w-full h-full object-cover z-10"
          />
        </div>
      ))}
    </div>
  )
}

export default UserPostsGrid
