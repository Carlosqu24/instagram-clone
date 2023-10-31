import React from 'react'

const sidebarClassNames = {
  aside: `fixed 
  top-0 
  left-0 
  z-40 
  h-screen 
  transition-transform 
  -translate-x-full 
   
  md:w-[72.8px]
  xl:w-[248.4px]
  md:translate-x-0

  border-solid 
  border-r-[1px]
  border-[#d7d7d9]
  dark:border-[#262626]
  divide-x`,
  navbarContainer: `h-full px-3 py-4 overflow-y-auto bg-[#fff] dark:bg-[#000] text-center`,
  navbarList: `space-y-2 font-medium`,
  navbarItem: ``,
  navbarItemTextSpan: `flex-1 ml-3 whitespace-nowrap hidden xl:flex 2xl:flex`,
  navbarLink: `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`,
  navbarLinkLogo: `flex items-center p-2 py-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`,
  navbarLogo: ``,
  navbarProfileImage: 'w-[24px] rounded-full'
}

const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className={sidebarClassNames.aside}
      aria-label="Sidebar"
    >
      <div className={sidebarClassNames.navbarContainer}>
        <ul className={sidebarClassNames.navbarList}>
          <li>
            <a href="#" className={sidebarClassNames.navbarLinkLogo}>
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
            <a href="/" className={sidebarClassNames.navbarLink}>
              <span className="material-icons w-[24px] h-[24px]">home</span>
              <span className={sidebarClassNames.navbarItemTextSpan}>
                Inicio
              </span>
            </a>
          </li>
          <li>
            <a href="/profile" className={sidebarClassNames.navbarLink}>
              <img
                className={sidebarClassNames.navbarProfileImage}
                src="../../../public/profile-image.jpg"
                alt=""
              />

              <span className={sidebarClassNames.navbarItemTextSpan}>
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
