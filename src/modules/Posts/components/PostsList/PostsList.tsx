import React from 'react'
import PostCard from '../PostCard/PostCard'
import { Post } from 'models/post'

interface PostsListProps {
  postsList: Post[]
}

const PostsList = ({ postsList }: PostsListProps) => {
  return (
    <ul
      className="
                w-[100%] 
                sm:w-[630px] 
                md:w-[630px] 
                xl:w-[630px] 
                flex 
                flex-col 
                items-center 
                justify-center 
                lg:m-0
                lg:ml-auto
                m-auto
            "
    >
      {postsList.map((post) => (
        <PostCard post={post} />
      ))}
    </ul>
  )
}

export default PostsList
