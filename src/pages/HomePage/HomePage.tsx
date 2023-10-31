import RightSidebar from 'components/RightSidebar/RightSidebar'
import PostsList from 'modules/Posts/components/PostsList/PostsList'
import PostsContainer from 'modules/Posts/containers/PostsListContainer/PostListContainer'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <PostsContainer />
      <RightSidebar />
    </>
  )
}

export default HomePage
