import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Sidebar from 'components/Sidebar/Sidebar'
import 'flowbite'
import { router } from 'routes'

// pt 22px + 16px

const appClassNames = {
  main: `
  
    p-0 
    sm:px-4 
    sm:pt-[38px]
    
    md:px-4
    md:pt-[38px] 
   
    lg:px-4
    lg:pt-[38px] 
    
    xl:p-4
    xl:pt-[38px] 
    
    2xl:px-4
    2xl:pt-[38px] 
    
    md:ml-[72.8px] 
    xl:ml-[248.4px] 
    flex 
    flex-row
    lg:justify-center
    justify-center

    bg-[#fff] 
    dark:bg-[#000] 
    text-[#000] 
    dark:text-[#fff]`
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
