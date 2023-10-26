import React from 'react'

const userPostsList = [
  {
    id: crypto.randomUUID(),
    totalLikes: 23,
    totalComments: 2,
    imageURL:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FDn7vrsNlrLl0uCEqXJJFBduGQ-w%3D%2F2119x1414%2Ffilters%3Afill(auto%2C1)%2Ftropical-beach--tulum--mexico-636738724-a5270b76dccc437eac5d67ec82077621.jpg&f=1&nofb=1&ipt=0184d6ebc9dddc53ef400aade034a202464abd2ec310b33896091b746bf7c9d0&ipo=images'
  },
  {
    id: crypto.randomUUID(),
    totalLikes: 23,
    totalComments: 2,
    imageURL:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpaper.nu%2Fwp-content%2Fuploads%2F2015%2F09%2Fmaldives_tropical_beach_sand_summer_palm_trees_88001_3840x2160.jpg&f=1&nofb=1&ipt=e8fe7e561b21d73bcc69f4d838c83959b074eeb365f42ad0478720170620e186&ipo=images'
  },
  {
    id: crypto.randomUUID(),
    totalLikes: 23,
    totalComments: 2,
    imageURL:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1179378.jpg&f=1&nofb=1&ipt=16ed60f93eb536473f261c8ac17ad3b600219ad9e8f537f14d39c214decf9098&ipo=images'
  },
  {
    id: crypto.randomUUID(),
    totalLikes: 23,
    totalComments: 2,
    imageURL:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpaperflare.com%2Fstatic%2F87%2F982%2F499%2Fmountains-snow-sunrise-5k-wallpaper.jpg&f=1&nofb=1&ipt=97b3d28f59088e5b4a29fe257203f5cde49698dace4d068e3449d4c32fc6cfea&ipo=images'
  },
  {
    id: crypto.randomUUID(),
    totalLikes: 23,
    totalComments: 2,
    imageURL:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.goodfreephotos.com%2Falbums%2Fother-landscapes%2Fscenic-mountain-landscape.jpg&f=1&nofb=1&ipt=17ba1977ba981ab3a93d06111b509f3a3e0ad620a44b475203ce6bec006f6824&ipo=images'
  },
  {
    id: crypto.randomUUID(),
    totalLikes: 23,
    totalComments: 2,
    imageURL:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fwallpapers%2Flamborghini-aventador-sv-2018-s4.jpg&f=1&nofb=1&ipt=1fdd4d84812711247a0e84aa18e7603e8e692c213645672795a0c9d3869f8d17&ipo=images'
  }
]

const UserPostsGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-7">
      {userPostsList.map((post) => (
        <div className="relative h-[215px] ">
          <div className="invisible h-0 w-0 flex items-center justify-center z-20 hover:w-full hover:h-full hover:absolute hover:bg-[#343434ad]">
            <span className="z-30">{post.totalLikes}</span>
            <span className="ml-5 z-30">{post.totalComments}</span>
          </div>
          <img
            src={post.imageURL}
            className="absolute bg-blue-400 w-full h-full object-cover z-10"
          />
        </div>
      ))}
    </div>
  )
}

export default UserPostsGrid
