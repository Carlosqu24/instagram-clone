import { Post } from 'models/post'
import PostsList from 'modules/Posts/components/PostsList/PostsList'
import React from 'react'

interface PostListPresentationProps {
  postsList: Post[]
}

const PostListPresentation = ({ postsList }: PostListPresentationProps) => {
  return <PostsList postsList={postsList} />
}

export default PostListPresentation
