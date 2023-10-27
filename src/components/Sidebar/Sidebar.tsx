import React from 'react'

const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="
          fixed 
          top-0 
          left-0 
          z-40 
          h-screen 
          transition-transform 
          -translate-x-full 
          sm:w-18 
          md:w-18
          xl:w-56
          sm:translate-x-0
        "
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#000] dark:bg-[#000] text-center">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 py-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                className={window.innerWidth >= 1280 ? 'w-28' : 'w-6'}
                src={
                  window.innerWidth >= 1280
                    ? '../../../public/instagram-logo-white.png'
                    : '../../../public/instagram-logo-small-screen-white.png'
                }
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="material-icons">home</span>
              <span className="flex-1 ml-3 whitespace-nowrap hidden xl:flex 2xl:flex">
                Inicio
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                className="w-6 rounded-full"
                src="../../../public/profile-image.jpg"
                alt=""
              />

              <span className="flex-1 ml-3 whitespace-nowrap hidden xl:flex 2xl:flex">
                Perfil
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
