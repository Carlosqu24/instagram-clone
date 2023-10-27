import RightSidebar from 'components/RightSidebar/RightSidebar'
import PostsList from 'modules/Posts/PostsList/PostsList'
import UserProfile from 'modules/User/UserProfile/UserProfile'
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
    element: (
      <UserProfile
        user={{
          id: crypto.randomUUID(),
          userName: 'carlos_qu24',
          displayName: 'Carlos H. Quesada',
          biography: 'Web developer | Web designer P.Z. 🌊🌴'
        }}
      />
    )
  }
]

export const router = createBrowserRouter(routes)
