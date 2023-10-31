import { Post } from 'models/post'
import PostsList from 'modules/Posts/components/PostsList/PostsList'
import StoriesCarousel from 'modules/Posts/components/StoriesCarousel/StoriesCarousel'
import React from 'react'

interface PostListPresentationProps {
  postsList: Post[]
}

const PostsPresentation = ({ postsList }: PostListPresentationProps) => {
  return (
    <div className="w-[100%] max-w-[630px] block">
      <StoriesCarousel />
      <PostsList postsList={postsList} />
    </div>
  )
}

export default PostsPresentation
