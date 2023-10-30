import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Sidebar from 'components/Sidebar/Sidebar'
import 'flowbite'
import { router } from 'routes'

const appClassNames = {
  main: "p-0 sm:p-4 md:p-4 lg:p-4 xl:p-4 2xl:p-4 sm:ml-20 md:ml-20 xl:ml-56 flex m-auto bg-[#fff] dark:bg-[#000] text-[#000] dark:text-[#fff]"
} 

function App() {
  return (
    <>
      <Sidebar />

      <main className={appClassNames.main}>
        {/* <PostsList /> */}

        <RouterProvider router={router} />

        {/* <RightSidebar /> */}
      </main>
    </>
  )
}

export default App
