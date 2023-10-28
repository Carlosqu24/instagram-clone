import React from 'react'
import PostListPresentation from 'modules/Posts/presentations/PostListPresentation/PostListPresentation'
import { mockPostsList } from 'data/posts'

const PostListContainer = () => {
  return <PostListPresentation postsList={mockPostsList} />
}

export default PostListContainer
