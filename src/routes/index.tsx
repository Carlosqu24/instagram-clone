import RightSidebar from 'components/RightSidebar/RightSidebar'
import PostsList from 'modules/Posts/PostsList/PostsList'
import UserProfile from 'modules/User/UserProfile/UserProfile'
import UserProfilePage from 'modules/User/pages/UserProfilePage/UserProfilePage'
import { createBrowserRouter } from 'react-router-dom'

interface Route {
  path: string
  element: JSX.Element
}

const routes: Route[] = [
  {
    path: '/',
    element: (
      <>
        <PostsList />
        <RightSidebar />
      </>
    )
  },
  {
    path: '/profile',
    element: <UserProfilePage />
  }
]

export const router = createBrowserRouter(routes)
