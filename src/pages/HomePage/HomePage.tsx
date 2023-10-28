import RightSidebar from 'components/RightSidebar/RightSidebar'
import PostsList from 'modules/Posts/components/PostsList/PostsList'
import PostListContainer from 'modules/Posts/containers/PostsListContainer/PostListContainer'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <PostListContainer />
      <RightSidebar />
    </>
  )
}

export default HomePage
