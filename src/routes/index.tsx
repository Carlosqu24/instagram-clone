import UserPostCardPage from 'modules/User/pages/UserPostCardPage/UserPostCardPage'
import UserProfilePage from 'modules/User/pages/UserProfilePage/UserProfilePage'
import HomePage from 'pages/HomePage/HomePage'
import { createBrowserRouter } from 'react-router-dom'

interface Route {
  path: string
  element: JSX.Element
}

const routes: Route[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/profile',
    element: <UserProfilePage />
  },
  {
    path: '/profile/posts/:postId',
    element: (
      <>
        <UserPostCardPage />
      </>
    )
  }
]

export const router = createBrowserRouter(routes)
