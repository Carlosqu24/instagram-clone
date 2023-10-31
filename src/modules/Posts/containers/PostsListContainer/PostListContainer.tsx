import React from 'react'
import PostsPresentation from 'modules/Posts/presentations/PostListPresentation/PostListPresentation'
import { mockPostsList } from 'data/posts'

const PostsContainer = () => {
  return <PostsPresentation postsList={mockPostsList} />
}

export default PostsContainer
