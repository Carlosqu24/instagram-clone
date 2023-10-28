import RightSidebar from 'components/RightSidebar/RightSidebar'
import PostsList from 'modules/Posts/PostsList/PostsList'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <PostsList />
      <RightSidebar />
    </>
  )
}

export default HomePage
